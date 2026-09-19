import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/miu64ybug.css';
import '../../css/m/m9j-jmwzn.css';
import '../../css/b/b29kr7l6m.css';
import '../../css/o/otjxx9bcl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="miu64ybug"/><path class="m9j-jmwzn"/><path class="b29kr7l6m"/><path class="otjxx9bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bloom"} {...others} />);
}

export default Component;
