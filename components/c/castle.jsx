import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k0phntbpf.css';
import '../../css/f/f78qppjnj.css';
import '../../css/g/g_i87xbuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k0phntbpf"/><path class="f78qppjnj"/><path class="g_i87xbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:castle"} {...others} />);
}

export default Component;
