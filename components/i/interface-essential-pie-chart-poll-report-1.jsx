import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoi1t8j7m.css';
import '../../css/k/k1l94rx8p.css';
import '../../css/q/qd728sbzj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aoi1t8j7m"/><path class="k1l94rx8p"/><path class="qd728sbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-pie-chart-poll-report-1"} {...others} />);
}

export default Component;
