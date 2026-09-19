import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7kd4zr2m.css';
import '../../css/g/gc3rb1bxv.css';
import '../../css/r/rortcs8ut.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v7kd4zr2m"/><path class="gc3rb1bxv"/><path class="rortcs8ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speakerwith1soundwave"} {...others} />);
}

export default Component;
