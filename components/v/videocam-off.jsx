import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvlzdyfkb.css';
import '../../css/q/qm_k6gbmc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fvlzdyfkb"/><path class="qm_k6gbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:videocam-off"} {...others} />);
}

export default Component;
