import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn55ge7zx.css';
import '../../css/z/zt7_6-8vu.css';
import '../../css/e/ers2p075t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tn55ge7zx"><path class="zt7_6-8vu"/><path class="ers2p075t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:english-mustache"} {...others} />);
}

export default Component;
