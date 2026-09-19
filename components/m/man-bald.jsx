import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz5lxvb8w.css';
import '../../css/n/nqbv9qbck.css';
import '../../css/u/u0fo4obit.css';
import '../../css/r/rh3nsbc2t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jz5lxvb8w"/><path class="nqbv9qbck"/><path class="u0fo4obit"/><path class="rh3nsbc2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-bald"} {...others} />);
}

export default Component;
