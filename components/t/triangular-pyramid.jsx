import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qqjbmbccq.css';
import '../../css/x/xoi7_t6rr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qqjbmbccq"/><path class="xoi7_t6rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:triangular-pyramid"} {...others} />);
}

export default Component;
