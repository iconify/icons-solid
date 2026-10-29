import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n6pap_bir.css';
import '../../css/h/h3xse5oqa.css';
import '../../css/x/xurpiib7h.css';
import '../../css/m/mdlqgq8-w.css';
import '../../css/o/oivip8bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n6pap_bir wm-deco"/><path class="h3xse5oqa wm-deco"/><path class="wm-deco xurpiib7h"/><path class="mdlqgq8-w wm-k"/><path class="oivip8bjf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-concierge-blueprint"} {...others} />);
}

export default Component;
