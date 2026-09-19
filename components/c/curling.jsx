import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/b/ble3jubnc.css';
import '../../css/s/shz9zobhz.css';
import '../../css/r/r4tcq2bcg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="ble3jubnc"/><path class="shz9zobhz"/><path class="r4tcq2bcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:curling"} {...others} />);
}

export default Component;
