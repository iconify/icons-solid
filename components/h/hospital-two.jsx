import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/owvliobpk.css';
import '../../css/t/ts8i-ac1g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="owvliobpk"/><path class="ts8i-ac1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hospital-two"} {...others} />);
}

export default Component;
