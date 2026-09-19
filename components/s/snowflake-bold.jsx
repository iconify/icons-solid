import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj-vjquhd.css';
import '../../css/b/b8luwwbbq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="bj-vjquhd"/><path class="b8luwwbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:snowflake-bold"} {...others} />);
}

export default Component;
