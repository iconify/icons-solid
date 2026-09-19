import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mujcmz6vw.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mujcmz6vw"/><path class="q-tflgzje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chevron-up-circle-outline"} {...others} />);
}

export default Component;
