import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/d_dif1biv.css';
import '../../css/p/pmc6ujvqe.css';
import '../../css/l/l-60m8bef.css';
import '../../css/y/yqpr3sbsm.css';
import '../../css/k/kdqc-gb5s.css';
import '../../css/q/qehilybwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="d_dif1biv"/><path class="pmc6ujvqe"/><path class="l-60m8bef"/><path class="yqpr3sbsm"/><path class="kdqc-gb5s"/><path class="qehilybwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wind"} {...others} />);
}

export default Component;
