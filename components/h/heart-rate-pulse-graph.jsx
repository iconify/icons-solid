import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k8jn3jbov.css';
import '../../css/c/cxgvwrbes.css';
import '../../css/u/ut57gnb0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="k8jn3jbov"/><path class="cxgvwrbes"/><path class="ut57gnb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:heart-rate-pulse-graph"} {...others} />);
}

export default Component;
