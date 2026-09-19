import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwoz82bix.css';
import '../../css/h/hsfk00bqh.css';
import '../../css/j/jtwksbc3b.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vwoz82bix"/><path class="hsfk00bqh"/><path clip-rule="evenodd" class="jtwksbc3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:handshake"} {...others} />);
}

export default Component;
