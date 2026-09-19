import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/x/xedfj89fl.css';
import '../../css/p/p7l2a-b7e.css';
import '../../css/m/mdc3ss7xx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="xedfj89fl"/><path class="p7l2a-b7e"/><path class="mdc3ss7xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:music-cd"} {...others} />);
}

export default Component;
