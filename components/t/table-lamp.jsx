import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nin1__b8i.css';
import '../../css/w/wc7kqptyu.css';
import '../../css/i/i4_4y8x4l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nin1__b8i"/><path class="wc7kqptyu"/><path class="i4_4y8x4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:table-lamp"} {...others} />);
}

export default Component;
