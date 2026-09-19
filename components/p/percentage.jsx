import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tuvu8wjin.css';
import '../../css/q/qbegytbhw.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="tuvu8wjin"/><circle class="qbegytbhw"/><path class="opakkwbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:percentage"} {...others} />);
}

export default Component;
