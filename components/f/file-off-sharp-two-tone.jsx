import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g5ncw42dh.css';
import '../../css/q/q5hmxc_qj.css';
import '../../css/i/iyreedmkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="g5ncw42dh"/><path class="q5hmxc_qj"/><path class="iyreedmkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-off-sharp-two-tone"} {...others} />);
}

export default Component;
