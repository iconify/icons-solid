import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lby40xbqa.css';
import '../../css/o/ofcsvz1oc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lby40xbqa"/><path class="ofcsvz1oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-left-down"} {...others} />);
}

export default Component;
