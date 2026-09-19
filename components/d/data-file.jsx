import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xh09az3_x.css';
import '../../css/r/r9nttu7ak.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xh09az3_x"/><path class="r9nttu7ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:data-file"} {...others} />);
}

export default Component;
