import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sxr1bwbgh.css';
import '../../css/n/nkpchpbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect transform="rotate(-10 3.61 36.534)" class="sxr1bwbgh"/><path class="nkpchpbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:straight-razor"} {...others} />);
}

export default Component;
