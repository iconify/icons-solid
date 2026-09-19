import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z01qkqb2l.css';
import '../../css/q/q37jtebrq.css';
import '../../css/n/n92m255cp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="z01qkqb2l"/><path class="q37jtebrq"/><path class="n92m255cp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mask"} {...others} />);
}

export default Component;
