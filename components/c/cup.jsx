import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yw5nrdgml.css';
import '../../css/l/lxdln76cc.css';
import '../../css/j/jnskwr84b.css';
import '../../css/r/rfia81eko.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="hit3bi0-v"><path class="yw5nrdgml"/><path class="lxdln76cc"/><path class="jnskwr84b"/><path class="rfia81eko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cup"} {...others} />);
}

export default Component;
