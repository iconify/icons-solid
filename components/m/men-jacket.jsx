import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/inx1i0bqc.css';
import '../../css/f/f11mo2b6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="inx1i0bqc"/><path class="f11mo2b6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:men-jacket"} {...others} />);
}

export default Component;
