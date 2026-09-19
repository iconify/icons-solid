import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/puqwlabwz.css';
import '../../css/w/w9xpt5bbj.css';
import '../../css/p/p7dq1qnxw.css';
import '../../css/g/gcygtacql.css';
import '../../css/v/vdc_bubrw.css';
import '../../css/s/sxxvh9brf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="puqwlabwz"/><path class="w9xpt5bbj"/><path class="p7dq1qnxw"/><path class="gcygtacql"/><path class="vdc_bubrw"/><path class="sxxvh9brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:increase"} {...others} />);
}

export default Component;
