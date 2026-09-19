import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wfz69ubcx.css';
import '../../css/y/ys1pfks_j.css';
import '../../css/l/lmpy1qbdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wfz69ubcx"/><path class="ys1pfks_j"/><path class="lmpy1qbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bread-one"} {...others} />);
}

export default Component;
