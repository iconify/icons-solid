import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ay1eebbgh.css';
import '../../css/t/tmji5fs0k.css';
import '../../css/f/ftxdg-b_l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ay1eebbgh"/><path class="tmji5fs0k"/><path class="ftxdg-b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-with-steam-from-nose"} {...others} />);
}

export default Component;
