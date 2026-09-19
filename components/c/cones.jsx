import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q4hgcgrmu.css';
import '../../css/d/dlx2xvbhm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q4hgcgrmu"/><path class="dlx2xvbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cones"} {...others} />);
}

export default Component;
