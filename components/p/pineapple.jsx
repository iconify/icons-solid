import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1f0q-3kj.css';
import '../../css/b/bk0vetmta.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f1f0q-3kj"/><path class="bk0vetmta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pineapple"} {...others} />);
}

export default Component;
