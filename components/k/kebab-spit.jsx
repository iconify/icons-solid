import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyt-vk_ql.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nyt-vk_ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:kebab-spit"} {...others} />);
}

export default Component;
