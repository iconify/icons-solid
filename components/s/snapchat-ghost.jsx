import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je1zpsble.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="je1zpsble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:snapchat-ghost"} {...others} />);
}

export default Component;
