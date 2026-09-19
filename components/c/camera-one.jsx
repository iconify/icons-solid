import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yez7skblq.css';
import '../../css/s/s8a25vbbq.css';
import '../../css/t/twex32ghj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="yez7skblq"/><circle class="s8a25vbbq"/><path class="twex32ghj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camera-one"} {...others} />);
}

export default Component;
