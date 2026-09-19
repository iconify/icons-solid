import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi1s0_b3l.css';
import '../../css/q/q25o2buzt.css';
import '../../css/d/df-2q4bmd.css';
import '../../css/h/hp_g0wb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi1s0_b3l"/><path class="q25o2buzt"/><path class="df-2q4bmd"/><path class="hp_g0wb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:categories-filled"} {...others} />);
}

export default Component;
