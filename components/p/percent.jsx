import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/lw1hl556r.css';
import '../../css/k/k0f9fhb0x.css';
import '../../css/y/y1axigmai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="lw1hl556r"/><circle class="k0f9fhb0x"/><circle class="y1axigmai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:percent"} {...others} />);
}

export default Component;
