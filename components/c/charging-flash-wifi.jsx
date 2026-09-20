import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5-t23b_v.css';
import '../../css/c/cgl-gvb4h.css';
import '../../css/x/x7grdtbqm.css';
import '../../css/p/psfhnqc2f.css';
import '../../css/w/wbd5_fb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x5-t23b_v"/><path class="cgl-gvb4h"/><path class="x7grdtbqm"/><path class="psfhnqc2f"/><path class="wbd5_fb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:charging-flash-wifi"} {...others} />);
}

export default Component;
