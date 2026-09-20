import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zym40bb_i.css';
import '../../css/h/h7_1mrqjr.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/u9ce-33wr.css';
import '../../css/h/h0--35b1u.css';
import '../../css/f/fordnus3j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zym40bb_i"/><path class="h7_1mrqjr"/><g class="ij2x_72vy"><path class="u9ce-33wr"/><path class="h0--35b1u"/><path class="fordnus3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:folded-hands-medium-dark-skin-tone"} {...others} />);
}

export default Component;
