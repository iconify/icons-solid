import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/n30u93bfw.css';
import '../../css/u/uxhytcbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="n30u93bfw"/><path class="uxhytcbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:backpack"} {...others} />);
}

export default Component;
