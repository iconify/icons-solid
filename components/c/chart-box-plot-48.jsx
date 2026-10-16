import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utf77lbef.css';
import '../../css/s/scbs1klxo.css';
import '../../css/u/u7h9tbb8s.css';
import '../../css/h/h1lyfgblt.css';
import '../../css/y/y5q7z4hfb.css';
import '../../css/q/qaw_-txxt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="utf77lbef"/><path class="scbs1klxo"/><path class="u7h9tbb8s"/><path class="h1lyfgblt"/><path class="y5q7z4hfb"/><path class="qaw_-txxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-box-plot-48"} {...others} />);
}

export default Component;
