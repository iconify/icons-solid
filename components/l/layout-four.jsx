import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/b/bxn6uzent.css';
import '../../css/x/xue3vwgre.css';
import '../../css/q/qyv0r-lwh.css';
import '../../css/k/ky0qqz3rh.css';
import '../../css/y/yrac19uez.css';
import '../../css/o/okw-psbbd.css';
import '../../css/h/hhtrs6b8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="bxn6uzent"/><path class="xue3vwgre"/><path class="qyv0r-lwh"/><path class="ky0qqz3rh"/><path class="yrac19uez"/><path class="okw-psbbd"/><path class="hhtrs6b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:layout-four"} {...others} />);
}

export default Component;
