import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nsun8p51f.css';
import '../../css/e/e5o0w24kl.css';
import '../../css/b/bvn0b9b_i.css';
import '../../css/w/wnvwz5s0k.css';
import '../../css/j/jhj2v-bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nsun8p51f wm-shadow"/><path class="e5o0w24kl wm-shadow"/><path class="bvn0b9b_i"/><path class="wnvwz5s0k"/><path class="jhj2v-bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:thumbs-down"} {...others} />);
}

export default Component;
