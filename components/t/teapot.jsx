import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kv2m18g6m.css';
import '../../css/d/do_ciqhik.css';
import '../../css/v/voz9ctthh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kv2m18g6m"/><path class="do_ciqhik"/><path class="voz9ctthh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:teapot"} {...others} />);
}

export default Component;
