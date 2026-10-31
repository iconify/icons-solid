import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cugdnbcke.css';
import '../../css/g/gs6fbxbjv.css';
import '../../css/y/y-hsrvr4b.css';
import '../../css/x/xz-gtfvsb.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="cugdnbcke"/><path class="gs6fbxbjv"/><path class="y-hsrvr4b"/><path class="xz-gtfvsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sg"} {...others} />);
}

export default Component;
