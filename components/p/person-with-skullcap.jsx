import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf9vpvbuw.css';
import '../../css/j/jnkns5b5u.css';
import '../../css/f/fh32d1b6b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yf9vpvbuw"/><path class="jnkns5b5u"/><path class="fh32d1b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-with-skullcap"} {...others} />);
}

export default Component;
