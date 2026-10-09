import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2l8ftbhe.css';
import '../../css/p/p_7xd_big.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2l8ftbhe"/><path class="p_7xd_big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-48-bold"} {...others} />);
}

export default Component;
