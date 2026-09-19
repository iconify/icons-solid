import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5f-4y4sa.css';
import '../../css/d/d04d3acre.css';
import '../../css/i/izzti6-0z.css';
import '../../css/z/zoa5xtbou.css';
import '../../css/b/bowjq9g_i.css';
import '../../css/n/nuh5gzbto.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q5f-4y4sa"/><path class="d04d3acre"/><path clip-rule="evenodd" class="izzti6-0z"/><path clip-rule="evenodd" class="zoa5xtbou"/><path class="bowjq9g_i"/><path clip-rule="evenodd" class="nuh5gzbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sad-tear-outline"} {...others} />);
}

export default Component;
