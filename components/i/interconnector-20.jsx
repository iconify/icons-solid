import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nboi0qbgb.css';
import '../../css/z/zhh6u5bcx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nboi0qbgb"/><path class="zhh6u5bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:interconnector-20"} {...others} />);
}

export default Component;
