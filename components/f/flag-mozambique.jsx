import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/i/inneowbgb.css';
import '../../css/q/qk-54mb3d.css';
import '../../css/s/s__9l0bok.css';
import '../../css/e/e96mmkbwm.css';
import '../../css/m/ms_47mbgh.css';
import '../../css/u/ub1aa4b5e.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="inneowbgb"/><path class="qk-54mb3d"/><path class="s__9l0bok"/><path class="e96mmkbwm"/><path class="ms_47mbgh"/><path class="ub1aa4b5e"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-mozambique"} {...others} />);
}

export default Component;
