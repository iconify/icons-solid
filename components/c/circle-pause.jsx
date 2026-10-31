import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/c/c29k6cp1o.css';
import '../../css/z/zkknb_but.css';
import '../../css/c/c4-gllbmj.css';
import '../../css/r/rze47ib2l.css';
import '../../css/t/twi4qybfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="c29k6cp1o"/><path class="zkknb_but"/><path class="c4-gllbmj"/><path class="rze47ib2l"/><path class="twi4qybfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-pause"} {...others} />);
}

export default Component;
