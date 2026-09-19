import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zay1jacum.css';
import '../../css/j/j60auacns.css';
import '../../css/x/x0x2libsd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zay1jacum"/><path class="j60auacns"/><path class="x0x2libsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:video-two"} {...others} />);
}

export default Component;
