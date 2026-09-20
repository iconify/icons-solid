import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6wm8ehfy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d6wm8ehfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bell-notification-solid"} {...others} />);
}

export default Component;
