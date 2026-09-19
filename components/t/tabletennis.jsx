import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jk7jwdk.css';
import '../../css/m/m8higac8x.css';
import '../../css/k/kq595m4dc.css';
import '../../css/c/cm6wi-bmk.css';
import '../../css/w/wimbj3bei.css';
import '../../css/j/jqmmdu3us.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c3jk7jwdk"/><path class="m8higac8x"/><path class="kq595m4dc"/><circle class="cm6wi-bmk"/><circle class="wimbj3bei"/><path class="jqmmdu3us"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tabletennis"} {...others} />);
}

export default Component;
