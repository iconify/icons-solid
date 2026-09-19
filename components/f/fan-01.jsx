import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d24hfde5l.css';
import '../../css/k/k8lt5sbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="d24hfde5l"/><path class="k8lt5sbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fan-01"} {...others} />);
}

export default Component;
