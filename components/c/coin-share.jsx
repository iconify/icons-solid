import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3hx6xb4b.css';
import '../../css/b/b31gozaoh.css';
import '../../css/x/x-a2rqbzh.css';
import '../../css/u/u2_4_o61j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e3hx6xb4b"/><path class="b31gozaoh"/><path class="x-a2rqbzh"/><path class="u2_4_o61j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coin-share"} {...others} />);
}

export default Component;
