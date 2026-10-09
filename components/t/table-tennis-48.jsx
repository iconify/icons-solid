import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytknsibzh.css';
import '../../css/v/vr1h12b6u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ytknsibzh"/><path class="vr1h12b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-tennis-48"} {...others} />);
}

export default Component;
