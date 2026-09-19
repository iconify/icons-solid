import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rcj_7sg0m.css';
import '../../css/v/vdtjl-bfb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rcj_7sg0m"/><path class="vdtjl-bfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:surveillance-cameras-two"} {...others} />);
}

export default Component;
