import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp79mfbbx.css';
import '../../css/l/lcqrf1bec.css';
import '../../css/s/sr4sabbve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kp79mfbbx"/><path class="lcqrf1bec"/><path class="sr4sabbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calico-light"} {...others} />);
}

export default Component;
