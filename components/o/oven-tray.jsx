import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/o/o1zek4bzc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="wzzwdrbyq"/><path class="o1zek4bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:oven-tray"} {...others} />);
}

export default Component;
