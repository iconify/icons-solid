import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klv2o9buk.css';
import '../../css/l/l-6s2cixh.css';
import '../../css/y/yhudq1ycc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="klv2o9buk"/><path clip-rule="evenodd" class="l-6s2cixh"/><path class="yhudq1ycc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-death-rate-stable-outline"} {...others} />);
}

export default Component;
