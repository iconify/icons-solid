import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm0xg-a7e.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="wm0xg-a7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:horizontal-tab-key"} {...others} />);
}

export default Component;
