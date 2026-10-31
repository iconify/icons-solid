import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l7pfjfa8h.css';
import '../../css/h/h1rmvh7fs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="l7pfjfa8h wm-k"/><path class="h1rmvh7fs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-check-gloss"} {...others} />);
}

export default Component;
