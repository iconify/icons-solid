import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhlhglulc.css';
import '../../css/k/k1nvv5m4k.css';

const viewBox = {"width":240,"height":240};
const content = `<path class="fhlhglulc"/><path class="k1nvv5m4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:affinity"} {...others} />);
}

export default Component;
