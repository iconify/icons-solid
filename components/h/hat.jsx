import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c0gw1rz3d.css';
import '../../css/a/acieqsbmw.css';
import '../../css/t/tiu7hrbyy.css';
import '../../css/w/wuhcfpogt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="c0gw1rz3d"/><rect class="acieqsbmw"/><path class="tiu7hrbyy"/><path class="wuhcfpogt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hat"} {...others} />);
}

export default Component;
