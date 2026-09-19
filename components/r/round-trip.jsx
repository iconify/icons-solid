import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z6rve-slh.css';
import '../../css/s/s_bhinboa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z6rve-slh"/><path class="s_bhinboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:round-trip"} {...others} />);
}

export default Component;
