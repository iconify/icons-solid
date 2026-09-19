import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjku5iuiy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wjku5iuiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:circular-sawblade"} {...others} />);
}

export default Component;
