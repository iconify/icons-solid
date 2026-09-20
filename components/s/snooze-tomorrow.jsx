import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbmeb0b8h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xbmeb0b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:snooze-tomorrow"} {...others} />);
}

export default Component;
