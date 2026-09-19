import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi_ta5bxg.css';
import '../../css/g/gtj2o21vx.css';
import '../../css/f/fisv-_b0x.css';
import '../../css/f/faudxdwxm.css';
import '../../css/w/wggc0ubkj.css';
import '../../css/s/sj6ykexld.css';
import '../../css/y/y7uuv-_5y.css';
import '../../css/o/o-gg28b4u.css';
import '../../css/f/fwijru9bx.css';
import '../../css/h/h_8i17hfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yi_ta5bxg"/><path class="gtj2o21vx"/><path class="fisv-_b0x"/><path class="faudxdwxm"/><path class="wggc0ubkj"/><path class="sj6ykexld"/><path class="y7uuv-_5y"/><path class="o-gg28b4u"/><path class="fwijru9bx"/><ellipse class="h_8i17hfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:moonviewingceremony"} {...others} />);
}

export default Component;
