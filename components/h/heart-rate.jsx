import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wfrcxsbfo.css';
import '../../css/g/g8s7ym8bq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wfrcxsbfo"/><path class="g8s7ym8bq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:heart-rate"} {...others} />);
}

export default Component;
