import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtnzw9bua.css';
import '../../css/x/x-s0729al.css';
import '../../css/l/lqfq8cbct.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wtnzw9bua"/><path class="x-s0729al"/><path class="lqfq8cbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elderly-48-bold"} {...others} />);
}

export default Component;
