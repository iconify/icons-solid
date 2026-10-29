import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xybgijbbi.css';
import '../../css/p/p8uv83fss.css';
import '../../css/h/hp5j1ab-r.css';
import '../../css/d/daienzbip.css';
import '../../css/o/owck3z4_k.css';
import '../../css/m/mpgci6bdi.css';
import '../../css/j/j-3qlr5-v.css';
import '../../css/s/sc-rrfbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xybgijbbi"/><path class="p8uv83fss wm-k"/><path class="hp5j1ab-r wm-k"/><path class="daienzbip wm-k"/><path class="owck3z4_k wm-k"/><path class="mpgci6bdi wm-shine"/><path class="j-3qlr5-v wm-a"/><path class="sc-rrfbqk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-bar-horizontal"} {...others} />);
}

export default Component;
