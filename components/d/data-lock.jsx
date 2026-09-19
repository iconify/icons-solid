import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gg5s88vci.css';
import '../../css/d/ddr0mpbwp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gg5s88vci"/><path class="ddr0mpbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:data-lock"} {...others} />);
}

export default Component;
