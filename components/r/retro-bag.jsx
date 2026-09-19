import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/szuz_1l_t.css';
import '../../css/z/zd46sgbja.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="szuz_1l_t"/><path class="zd46sgbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:retro-bag"} {...others} />);
}

export default Component;
