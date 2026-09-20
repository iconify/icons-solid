import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/o/oarrbudtu.css';
import '../../css/d/dia6kyhkk.css';
import '../../css/d/dnt30bc-v.css';
import '../../css/b/b4mof2b8e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="oarrbudtu"/><path class="dia6kyhkk"/><path class="dnt30bc-v"/><path class="b4mof2b8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:warehouse-1"} {...others} />);
}

export default Component;
