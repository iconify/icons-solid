import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w3flcy8mp.css';
import '../../css/y/y-asov6za.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="w3flcy8mp"/><path class="y-asov6za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paragraph-break"} {...others} />);
}

export default Component;
