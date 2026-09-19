import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb-3m9bdk.css';
import '../../css/h/hovxe1awm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jb-3m9bdk"/><path class="hovxe1awm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:tropical-fish"} {...others} />);
}

export default Component;
