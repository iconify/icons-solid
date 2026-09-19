import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/k3hwfxbku.css';
import '../../css/f/ff22yi0sg.css';
import '../../css/c/czea7sbrv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="k3hwfxbku"/><path class="ff22yi0sg"/><path class="czea7sbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:to-right"} {...others} />);
}

export default Component;
