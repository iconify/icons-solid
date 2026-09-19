import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9dvr0bhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9dvr0bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:forest-camp"} {...others} />);
}

export default Component;
