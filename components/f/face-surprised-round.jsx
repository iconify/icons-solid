import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aea8_4biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aea8_4biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:face-surprised-round"} {...others} />);
}

export default Component;
