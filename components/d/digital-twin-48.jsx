import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugmed2boc.css';
import '../../css/r/rixlmmb0i.css';
import '../../css/e/e8-qncccz.css';
import '../../css/m/mnkzgebuu.css';
import '../../css/w/wdyim30xn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ugmed2boc"/><path class="rixlmmb0i"/><path class="e8-qncccz"/><path class="mnkzgebuu"/><path class="wdyim30xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:digital-twin-48"} {...others} />);
}

export default Component;
