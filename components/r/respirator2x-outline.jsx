import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhprvbkhh.css';
import '../../css/i/ihvftj6_d.css';
import '../../css/f/fgs3gl2sz.css';
import '../../css/j/jiax3zkxt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="uhprvbkhh"/><path clip-rule="evenodd" class="ihvftj6_d"/><path class="fgs3gl2sz"/><path clip-rule="evenodd" class="jiax3zkxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:respirator2x-outline"} {...others} />);
}

export default Component;
