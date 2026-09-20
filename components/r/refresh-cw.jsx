import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqp-zlo1c.css';
import '../../css/e/eslg_bc-y.css';
import '../../css/v/vxr-ddbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oqp-zlo1c"/><path class="eslg_bc-y"/><path class="vxr-ddbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:refresh-cw"} {...others} />);
}

export default Component;
