import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/frt305boh.css';
import '../../css/w/wux2qh75e.css';
import '../../css/h/hdzvcloyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="frt305boh"/><path class="wux2qh75e"/><path class="hdzvcloyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:garage"} {...others} />);
}

export default Component;
