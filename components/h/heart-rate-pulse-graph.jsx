import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/live1qbjo.css';
import '../../css/v/vbfr57bfs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="live1qbjo"/><path class="vbfr57bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:heart-rate-pulse-graph"} {...others} />);
}

export default Component;
