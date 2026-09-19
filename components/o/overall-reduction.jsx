import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eg-tv-cxp.css';
import '../../css/s/s496tibhe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="eg-tv-cxp"/><path class="s496tibhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:overall-reduction"} {...others} />);
}

export default Component;
