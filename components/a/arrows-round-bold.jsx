import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-qnyfbkx.css';
import '../../css/v/v5eporb6g.css';
import '../../css/g/g_am8gbls.css';
import '../../css/j/jq5uyub0t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="d-qnyfbkx"/><path class="v5eporb6g"/><path class="g_am8gbls"/><path class="jq5uyub0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-round-bold"} {...others} />);
}

export default Component;
