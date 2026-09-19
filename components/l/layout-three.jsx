import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/n/nbm684d5v.css';
import '../../css/c/c5j5lzb8g.css';
import '../../css/g/gyjw88vlv.css';
import '../../css/w/wdvsx9m5t.css';
import '../../css/o/oc353sfwp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="nbm684d5v"/><path class="c5j5lzb8g"/><path class="gyjw88vlv"/><path class="wdvsx9m5t"/><path class="oc353sfwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:layout-three"} {...others} />);
}

export default Component;
