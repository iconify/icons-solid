import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd4dh8bjv.css';
import '../../css/j/jj2_wx93l.css';
import '../../css/q/qcz5hxzpp.css';
import '../../css/m/mfwba6bar.css';
import '../../css/g/gahhorbof.css';
import '../../css/u/uexx27b5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fd4dh8bjv"/><path class="jj2_wx93l"/><path class="qcz5hxzpp"/><path class="mfwba6bar"/><path class="gahhorbof"/><path class="uexx27b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-48"} {...others} />);
}

export default Component;
