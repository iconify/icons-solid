import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io5uy9biy.css';
import '../../css/m/mt5_qbbwq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="io5uy9biy"/><path class="mt5_qbbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-unread-48-bold"} {...others} />);
}

export default Component;
