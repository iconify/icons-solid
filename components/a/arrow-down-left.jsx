import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a6qvjjb4f.css';
import '../../css/e/elqirpz5r.css';
import '../../css/q/qo6r8rb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a6qvjjb4f wm-k"/><path class="elqirpz5r wm-a"/><path class="qo6r8rb6h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:arrow-down-left"} {...others} />);
}

export default Component;
