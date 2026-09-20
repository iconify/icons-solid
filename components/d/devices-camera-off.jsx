import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8if3ytuf.css';
import '../../css/y/yywevybdr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w8if3ytuf"/><path class="yywevybdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-camera-off"} {...others} />);
}

export default Component;
