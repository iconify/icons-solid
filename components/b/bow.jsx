import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bmx2kpbdt.css';
import '../../css/w/ww1h5jiva.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bmx2kpbdt"/><path class="ww1h5jiva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bow"} {...others} />);
}

export default Component;
