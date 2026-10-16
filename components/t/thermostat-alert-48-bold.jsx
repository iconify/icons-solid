import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmynvjkbh.css';
import '../../css/f/fdug528jx.css';
import '../../css/p/piqbfhj8g.css';
import '../../css/q/qnjenrxnq.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qmynvjkbh"/><path class="fdug528jx"/><path class="piqbfhj8g"/><path class="qnjenrxnq"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-alert-48-bold"} {...others} />);
}

export default Component;
