import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk8gf1b0k.css';
import '../../css/w/wmb1cn7ks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vk8gf1b0k"/><path class="wmb1cn7ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:contrast"} {...others} />);
}

export default Component;
