import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruo5rub3h.css';
import '../../css/g/gwszt1jdi.css';
import '../../css/j/jr913_bbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ruo5rub3h"/><path class="gwszt1jdi"/><path class="jr913_bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-superhero"} {...others} />);
}

export default Component;
