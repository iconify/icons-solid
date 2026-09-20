import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zym40bb_i.css';
import '../../css/s/snl4_j1oh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/u9ce-33wr.css';
import '../../css/h/h0--35b1u.css';
import '../../css/x/x9odmzbsk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zym40bb_i"/><path class="snl4_j1oh"/><g class="ij2x_72vy"><path class="u9ce-33wr"/><path class="h0--35b1u"/><path class="x9odmzbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:palms-up-together-medium-skin-tone"} {...others} />);
}

export default Component;
