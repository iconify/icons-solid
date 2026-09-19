import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/l/ll17zo0eo.css';
import '../../css/o/o0rnf8isg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dxeb_oimn"/><path class="ll17zo0eo"/><path class="o0rnf8isg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lotus"} {...others} />);
}

export default Component;
