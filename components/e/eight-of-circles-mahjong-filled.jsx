import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_vkl9uws.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="c_vkl9uws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:eight-of-circles-mahjong-filled"} {...others} />);
}

export default Component;
