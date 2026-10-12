import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/to4729rmj.css';
import '../../css/s/sylnwnbuh.css';
import '../../css/m/mkqlnvs_v.css';
import '../../css/d/dyu4v0jkx.css';
import '../../css/s/sh9owb-vh.css';
import '../../css/t/tkr0xi29k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-180 22.18 21.31)" class="to4729rmj"/><rect transform="rotate(-180 10.52 21.31)" class="sylnwnbuh"/><rect transform="rotate(-180 22.18 21.31)" class="mkqlnvs_v"/><rect transform="rotate(-180 10.52 21.31)" class="dyu4v0jkx"/><path class="sh9owb-vh"/><path class="tkr0xi29k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:relocate-start"} {...others} />);
}

export default Component;
