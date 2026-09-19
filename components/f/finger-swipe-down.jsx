import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qozmdccui.css';
import '../../css/z/zvp6zsbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qozmdccui"/><path class="zvp6zsbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-swipe-down"} {...others} />);
}

export default Component;
