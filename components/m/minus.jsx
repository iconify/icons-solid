import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3pu-kwzv.css';
import '../../css/r/rwidasb8k.css';
import '../../css/a/aq0i7ac3s.css';
import '../../css/r/rhmo2qb6x.css';
import '../../css/g/g4m61jjpu.css';
import '../../css/r/rizxg_1ak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3pu-kwzv wm-shadow"/><path class="rwidasb8k wm-k"/><path class="aq0i7ac3s wm-k"/><path class="rhmo2qb6x wm-k"/><path class="g4m61jjpu wm-k"/><path class="rizxg_1ak wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:minus"} {...others} />);
}

export default Component;
