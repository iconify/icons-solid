import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-fg9ecxp.css';
import '../../css/m/mop9vfbsd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="c-fg9ecxp"/><path class="mop9vfbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:honey-pot"} {...others} />);
}

export default Component;
