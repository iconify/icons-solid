import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj9jp9dwm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fj9jp9dwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sign-hashtag"} {...others} />);
}

export default Component;
