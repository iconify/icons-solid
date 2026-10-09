import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liisccame.css';
import '../../css/h/h6e7wy_ms.css';
import '../../css/a/a24rft0do.css';
import '../../css/n/nnwy57bcc.css';
import '../../css/y/yqhmzccbj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="liisccame"/><path class="h6e7wy_ms"/><path class="a24rft0do"/><path class="nnwy57bcc"/><path class="yqhmzccbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-fleet-48-bold"} {...others} />);
}

export default Component;
