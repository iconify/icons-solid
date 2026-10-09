import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6jb10bks.css';
import '../../css/k/kp1vk88ht.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q6jb10bks"/><path class="kp1vk88ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stamp-20"} {...others} />);
}

export default Component;
