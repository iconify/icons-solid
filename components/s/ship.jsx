import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lz5kq01wk.css';
import '../../css/w/wdki6fxhv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lz5kq01wk"/><path class="wdki6fxhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:ship"} {...others} />);
}

export default Component;
