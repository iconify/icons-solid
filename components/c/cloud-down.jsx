import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7z1gubub.css';
import '../../css/p/p2vd3xbgk.css';
import '../../css/j/j3gpqnbek.css';
import '../../css/m/mmdgk3bof.css';
import '../../css/l/l9bctyjux.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7z1gubub"/><path clip-rule="evenodd" class="p2vd3xbgk"/><path class="j3gpqnbek"/><path class="mmdgk3bof"/><path class="l9bctyjux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cloud-down"} {...others} />);
}

export default Component;
