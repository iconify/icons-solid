import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuqwgmbol.css';
import '../../css/s/sg2hhebqo.css';
import '../../css/a/ahkvt_bqj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wuqwgmbol"/><path class="sg2hhebqo"/><path class="ahkvt_bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:doughnut-chart"} {...others} />);
}

export default Component;
