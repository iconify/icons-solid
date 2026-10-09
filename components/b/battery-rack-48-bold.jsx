import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5axnedqy.css';
import '../../css/z/zgat5obkh.css';
import '../../css/x/xfjcxc-8g.css';
import '../../css/k/k60r53b3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z5axnedqy"/><path class="zgat5obkh"/><path class="xfjcxc-8g"/><path class="k60r53b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-rack-48-bold"} {...others} />);
}

export default Component;
