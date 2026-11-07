import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm_gscbzc.css';
import '../../css/j/j6xrxv6-w.css';
import '../../css/z/zw-s4mi4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wm_gscbzc"/><path class="j6xrxv6-w"/><path class="zw-s4mi4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-search-bold-duotone"} {...others} />);
}

export default Component;
