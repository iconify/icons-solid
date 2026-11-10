import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7i_3xsnx.css';
import '../../css/m/m-4yxgj_d.css';
import '../../css/r/r_mm28b-k.css';
import '../../css/u/u6435db5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k7i_3xsnx"/><path class="m-4yxgj_d"/><path class="r_mm28b-k"/><circle class="u6435db5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:inbox-notification"} {...others} />);
}

export default Component;
