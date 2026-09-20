import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_-jczb_q.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h_-jczb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zodiac-5-flat"} {...others} />);
}

export default Component;
