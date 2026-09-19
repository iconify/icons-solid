import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef3-cibdz.css';
import '../../css/p/pl59shb_b.css';
import '../../css/v/v99xfmbvu.css';
import '../../css/h/hekowkhvg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ef3-cibdz"/><path class="pl59shb_b"/><path class="v99xfmbvu"/><path class="hekowkhvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:router"} {...others} />);
}

export default Component;
