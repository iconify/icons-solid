import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xr59g6zsq.css';
import '../../css/v/v4m-gobyd.css';
import '../../css/o/odvo2bwsa.css';
import '../../css/p/pywn4zp7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xr59g6zsq"/><circle class="v4m-gobyd"/><path class="odvo2bwsa"/><path class="pywn4zp7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:air-bike"} {...others} />);
}

export default Component;
