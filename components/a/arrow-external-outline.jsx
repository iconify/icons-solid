import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k27k1godu.css';
import '../../css/h/hvp7y8b9e.css';
import '../../css/q/q0eq7jb_s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k27k1godu"/><path class="hvp7y8b9e"/><path class="q0eq7jb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-external-outline"} {...others} />);
}

export default Component;
