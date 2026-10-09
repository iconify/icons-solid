import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az4cwab1h.css';
import '../../css/o/ouobwmwuo.css';
import '../../css/q/qing99btl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="az4cwab1h"/><path class="ouobwmwuo"/><path class="qing99btl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-low-20"} {...others} />);
}

export default Component;
