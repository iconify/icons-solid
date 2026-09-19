import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xib2qv12u.css';
import '../../css/r/r_69r9b3c.css';
import '../../css/h/hbfbrwbos.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xib2qv12u"/><path class="r_69r9b3c"/><path class="hbfbrwbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:surveillance-cameras"} {...others} />);
}

export default Component;
