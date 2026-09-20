import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i48j-4b_r.css';
import '../../css/y/ys4z1_tir.css';
import '../../css/n/n958a9tgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i48j-4b_r"/><path class="ys4z1_tir"/><path class="n958a9tgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:piggy-bank-sharp-two-tone"} {...others} />);
}

export default Component;
