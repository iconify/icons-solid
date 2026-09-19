import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/a/af7k0bcjr.css';
import '../../css/z/z4mkicczo.css';
import '../../css/n/nv5f7eblz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="af7k0bcjr"/><path class="z4mkicczo"/><path class="nv5f7eblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:excel"} {...others} />);
}

export default Component;
