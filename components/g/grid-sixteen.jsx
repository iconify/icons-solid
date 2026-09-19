import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/hl30v4bui.css';
import '../../css/o/opb5c-oie.css';
import '../../css/p/pni55bcix.css';
import '../../css/t/tydye05iy.css';
import '../../css/t/tb86w6b9z.css';
import '../../css/z/zsap_l_do.css';
import '../../css/e/euc2_c05j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="hl30v4bui"/><path class="opb5c-oie"/><path class="pni55bcix"/><path class="tydye05iy"/><path class="tb86w6b9z"/><path class="zsap_l_do"/><path class="euc2_c05j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grid-sixteen"} {...others} />);
}

export default Component;
