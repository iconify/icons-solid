import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aux13abuw.css';
import '../../css/m/mcepihbux.css';
import '../../css/a/a3wbrcc6h.css';
import '../../css/s/sjowjbelj.css';
import '../../css/q/q7qsoobgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aux13abuw"/><path class="mcepihbux"/><path class="a3wbrcc6h"/><path class="sjowjbelj"/><path class="q7qsoobgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:building-03"} {...others} />);
}

export default Component;
