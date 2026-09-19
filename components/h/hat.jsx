import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o3y-mwb9w.css';
import '../../css/z/zdq5ixbzs.css';
import '../../css/f/fi8jscb1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o3y-mwb9w"/><rect class="zdq5ixbzs"/><path class="fi8jscb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hat"} {...others} />);
}

export default Component;
