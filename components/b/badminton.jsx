import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/a/a4v76gi7m.css';
import '../../css/w/wt1fcu4ke.css';
import '../../css/k/kmj7kph2b.css';
import '../../css/a/ar7d3wbfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="a4v76gi7m"/><path class="wt1fcu4ke"/><path class="kmj7kph2b"/><path class="ar7d3wbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:badminton"} {...others} />);
}

export default Component;
