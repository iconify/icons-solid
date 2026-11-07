import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9wjlktgi.css';
import '../../css/z/zsg-kcgty.css';
import '../../css/j/j6xrxv6-w.css';
import '../../css/z/zw-s4mi4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9wjlktgi"/><path clip-rule="evenodd" class="zsg-kcgty"/><path class="j6xrxv6-w"/><path class="zw-s4mi4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-date-bold-duotone"} {...others} />);
}

export default Component;
