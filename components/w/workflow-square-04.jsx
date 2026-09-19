import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r384zui5v.css';
import '../../css/w/wjl38rbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r384zui5v"/><path class="wjl38rbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-04"} {...others} />);
}

export default Component;
