import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud2q-obza.css';
import '../../css/s/s_1q0sbix.css';
import '../../css/w/w37xe3b9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud2q-obza"/><path class="s_1q0sbix"/><path class="w37xe3b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchtower-dark"} {...others} />);
}

export default Component;
