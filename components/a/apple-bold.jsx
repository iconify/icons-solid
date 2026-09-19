import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m45ig3bmy.css';
import '../../css/x/xjhwnvbgl.css';
import '../../css/y/yh5ahcbjw.css';
import '../../css/j/japg61bou.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m45ig3bmy"/><path class="xjhwnvbgl"/><path clip-rule="evenodd" class="yh5ahcbjw"/><path class="japg61bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:apple-bold"} {...others} />);
}

export default Component;
