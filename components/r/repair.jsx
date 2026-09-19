import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c_r9ymrlo.css';
import '../../css/f/fa_aro1wg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c_r9ymrlo"/><path class="fa_aro1wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:repair"} {...others} />);
}

export default Component;
