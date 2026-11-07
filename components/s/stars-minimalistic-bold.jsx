import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2tro4b9k.css';
import '../../css/i/itttytmxx.css';
import '../../css/x/xmy4_843o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2tro4b9k"/><path class="itttytmxx"/><path class="xmy4_843o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-bold"} {...others} />);
}

export default Component;
