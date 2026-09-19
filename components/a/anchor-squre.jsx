import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/u/u_i2j5blu.css';
import '../../css/q/qusuuk4wu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="u_i2j5blu"/><path class="qusuuk4wu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:anchor-squre"} {...others} />);
}

export default Component;
