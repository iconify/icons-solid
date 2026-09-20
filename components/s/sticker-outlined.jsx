import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whmsbhbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whmsbhbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:sticker-outlined"} {...others} />);
}

export default Component;
