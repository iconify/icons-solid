import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d90otmb1f.css';
import '../../css/u/ui04q6rnr.css';
import '../../css/l/leq7fbcnh.css';
import '../../css/v/vpw-7-z9w.css';
import '../../css/p/p23oue1nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d90otmb1f wm-k"/><path class="ui04q6rnr wm-a"/><path class="leq7fbcnh wm-k"/><path class="vpw-7-z9w"/><path class="p23oue1nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-owl"} {...others} />);
}

export default Component;
