import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq-7flbbr.css';
import '../../css/b/b0bcc0c-v.css';
import '../../css/z/z5kr1gbqy.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rq-7flbbr"/><path class="b0bcc0c-v"/><path clip-rule="evenodd" class="z5kr1gbqy"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-lock-bold"} {...others} />);
}

export default Component;
