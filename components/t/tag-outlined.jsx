import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv9mq4pxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv9mq4pxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:tag-outlined"} {...others} />);
}

export default Component;
