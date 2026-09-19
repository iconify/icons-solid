import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik1_o3bii.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="ik1_o3bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:mail-reply-all"} {...others} />);
}

export default Component;
