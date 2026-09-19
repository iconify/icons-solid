import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkdyavbvt.css';
import '../../css/h/h-1rv79sn.css';
import '../../css/v/v1lfa4b2j.css';
import '../../css/h/h6-frf8_q.css';
import '../../css/o/oq0f0ccav.css';
import '../../css/f/fvk5dfb-z.css';
import '../../css/c/cmh96bq3t.css';
import '../../css/b/b5b_babxs.css';
import '../../css/p/pnvp4knha.css';
import '../../css/d/djkh3hx3d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kkdyavbvt"/><path class="h-1rv79sn"/><path class="v1lfa4b2j"/><path class="h6-frf8_q"/><path class="oq0f0ccav"/><path class="fvk5dfb-z"/><path class="cmh96bq3t"/><path class="b5b_babxs"/><path class="pnvp4knha"/><path class="djkh3hx3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-keys"} {...others} />);
}

export default Component;
