import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuy8ujbot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wuy8ujbot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cloud-alert-line"} {...others} />);
}

export default Component;
