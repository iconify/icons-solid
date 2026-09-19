import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wn6anzbuz.css';
import '../../css/w/w4wo01ekf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wn6anzbuz"/><path class="w4wo01ekf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mirror"} {...others} />);
}

export default Component;
