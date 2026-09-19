import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/x/x_cl_fbwy.css';
import '../../css/a/ar0yt9bdl.css';
import '../../css/w/wckiccbtl.css';
import '../../css/k/kux-pvubc.css';
import '../../css/d/d82r3bcvw.css';
import '../../css/m/mwr1edbmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="x_cl_fbwy"/><path class="ar0yt9bdl"/><path class="wckiccbtl"/><path class="kux-pvubc"/><path class="d82r3bcvw"/><path class="mwr1edbmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:margin"} {...others} />);
}

export default Component;
