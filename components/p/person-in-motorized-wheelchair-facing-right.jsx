import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1g-f35-i.css';
import '../../css/j/jodc9sb6w.css';
import '../../css/u/ujxkkxesv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u1g-f35-i"/><path class="jodc9sb6w"/><path class="ujxkkxesv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-motorized-wheelchair-facing-right"} {...others} />);
}

export default Component;
