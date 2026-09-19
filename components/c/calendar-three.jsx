import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hkyvvobuq.css';
import '../../css/x/xhe8el-mx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="hkyvvobuq"/><path class="xhe8el-mx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:calendar-three"} {...others} />);
}

export default Component;
