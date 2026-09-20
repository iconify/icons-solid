import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ch2uzfsya.css';
import '../../css/d/d1nthkbwk.css';
import '../../css/v/v_ibbwbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ch2uzfsya"/><path class="d1nthkbwk"/><path class="v_ibbwbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balloon-broken"} {...others} />);
}

export default Component;
