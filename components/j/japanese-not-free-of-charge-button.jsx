import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7owt2bzc.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="u7owt2bzc"/><path class="bkqbhrlym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:japanese-not-free-of-charge-button"} {...others} />);
}

export default Component;
