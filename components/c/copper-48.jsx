import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze82bcb9d.css';
import '../../css/h/hwf5ppapq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ze82bcb9d"/><path class="hwf5ppapq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copper-48"} {...others} />);
}

export default Component;
