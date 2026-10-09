import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7vk3y3bo.css';
import '../../css/r/rpx2p260d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t7vk3y3bo"/><path class="rpx2p260d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:burger-48-bold"} {...others} />);
}

export default Component;
