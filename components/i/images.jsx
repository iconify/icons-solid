import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vehvvxl_a.css';
import '../../css/w/w8lgalt2r.css';
import '../../css/f/ffuxkkbyc.css';
import '../../css/p/pokcdsbts.css';
import '../../css/i/iqk_2bb3f.css';
import '../../css/e/eltynkt1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vehvvxl_a"/><path class="w8lgalt2r"/><rect class="ffuxkkbyc"/><path class="pokcdsbts"/><path class="iqk_2bb3f"/><path class="eltynkt1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:images"} {...others} />);
}

export default Component;
