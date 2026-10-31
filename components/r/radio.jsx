import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qv7i33bwb.css';
import '../../css/g/g6jn0f_wp.css';
import '../../css/p/pf80ohbvj.css';
import '../../css/w/wz6jtvbwn.css';
import '../../css/u/uasvcgbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qv7i33bwb wm-shadow"/><path class="g6jn0f_wp wm-shadow"/><path class="pf80ohbvj"/><path class="wz6jtvbwn"/><path class="uasvcgbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:radio"} {...others} />);
}

export default Component;
