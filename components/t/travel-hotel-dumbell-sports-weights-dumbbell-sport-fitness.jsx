import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rav8mkbga.css';
import '../../css/j/jm9s2rr3r.css';
import '../../css/s/s_sm4tfic.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="rav8mkbga"/><rect class="jm9s2rr3r"/><path class="s_sm4tfic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness"} {...others} />);
}

export default Component;
