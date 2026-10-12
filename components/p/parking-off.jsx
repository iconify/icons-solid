import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/echeipybo.css';
import '../../css/d/d_88ygb_d.css';
import '../../css/c/cd43_hb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="echeipybo"/><path class="d_88ygb_d"/><path class="cd43_hb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:parking-off"} {...others} />);
}

export default Component;
