import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/b/ble3jubnc.css';
import '../../css/w/ww18m3b3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="ble3jubnc"/><path class="ww18m3b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:curling"} {...others} />);
}

export default Component;
