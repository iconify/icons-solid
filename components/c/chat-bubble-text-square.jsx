import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-q1ywbtn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="f-q1ywbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:chat-bubble-text-square"} {...others} />);
}

export default Component;
