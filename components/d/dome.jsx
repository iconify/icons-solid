import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/h9-jrac4w.css';
import '../../css/e/efhy0xuho.css';
import '../../css/b/baquecuxi.css';
import '../../css/d/do5vkwb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="h9-jrac4w"/><path class="efhy0xuho"/><path class="baquecuxi"/><path class="do5vkwb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dome"} {...others} />);
}

export default Component;
