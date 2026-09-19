import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4nl7-bdg.css';
import '../../css/l/ldhzjccqk.css';
import '../../css/z/zqtfx5bwq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b4nl7-bdg"/><path class="ldhzjccqk"/><path class="zqtfx5bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-tipping-hand"} {...others} />);
}

export default Component;
