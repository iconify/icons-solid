import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p4anfmj7x.css';
import '../../css/i/ik9lmob6x.css';
import '../../css/z/zec3p4_0a.css';
import '../../css/t/tjx-cjtik.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="p4anfmj7x"/><path class="ik9lmob6x"/><path class="zec3p4_0a"/><path class="tjx-cjtik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-sheet"} {...others} />);
}

export default Component;
