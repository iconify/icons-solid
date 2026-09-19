import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gxi7x_bbo.css';
import '../../css/t/twnxp1ntc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gxi7x_bbo"/><path class="twnxp1ntc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sweater"} {...others} />);
}

export default Component;
