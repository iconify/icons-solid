import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onm6srtal.css';
import '../../css/u/u_r9y2t7q.css';
import '../../css/g/gquf-9rzq.css';
import '../../css/u/unqm5ju6m.css';
import '../../css/l/l3o99lapi.css';
import '../../css/w/wvt385-to.css';
import '../../css/a/app0occ0f.css';
import '../../css/z/zb--j-b7o.css';
import '../../css/y/y19bl0b8s.css';
import '../../css/l/lk__gumkh.css';
import '../../css/i/ilgvk_btb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="onm6srtal"/><path class="u_r9y2t7q"/><path class="gquf-9rzq"/><path class="unqm5ju6m"/><path class="l3o99lapi"/><path class="wvt385-to"/><path class="app0occ0f"/><path class="zb--j-b7o"/><path class="y19bl0b8s"/><path class="lk__gumkh"/><path class="ilgvk_btb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shop-sale-1"} {...others} />);
}

export default Component;
