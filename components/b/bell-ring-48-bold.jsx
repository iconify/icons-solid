import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxk_vcban.css';
import '../../css/f/fy_4q-bzq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wxk_vcban"/><path class="fy_4q-bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-ring-48-bold"} {...others} />);
}

export default Component;
