import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nr3vuui2s.css';
import '../../css/g/gdlthgbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="nr3vuui2s"/><path class="gdlthgbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:news"} {...others} />);
}

export default Component;
