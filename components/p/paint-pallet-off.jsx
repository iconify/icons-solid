import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/osxjw29nz.css';
import '../../css/x/xzmq84bei.css';
import '../../css/m/mzfuw8b7e.css';
import '../../css/p/p_z7rc6xw.css';
import '../../css/p/pmb-dxz1w.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="osxjw29nz"/><path clip-rule="evenodd" class="xzmq84bei"/></g><path clip-rule="evenodd" class="mzfuw8b7e"/><path class="p_z7rc6xw"/><path clip-rule="evenodd" class="pmb-dxz1w"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:paint-pallet-off"} {...others} />);
}

export default Component;
