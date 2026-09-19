import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fbo_5_dgq.css';
import '../../css/t/tglpq5bdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="fbo_5_dgq"/><path class="tglpq5bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:badge"} {...others} />);
}

export default Component;
