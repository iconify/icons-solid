import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3m7m-bmd.css';
import '../../css/f/fyfocklkw.css';
import '../../css/r/rgre2qbkr.css';
import '../../css/x/xc-77ibnv.css';
import '../../css/e/esfaysbwr.css';
import '../../css/t/tz32fthpe.css';
import '../../css/o/o8k62ic-r.css';
import '../../css/b/bcnvpiq2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3m7m-bmd wm-k"/><path class="fyfocklkw wm-k"/><path class="rgre2qbkr wm-k"/><path class="wm-shine xc-77ibnv"/><path class="esfaysbwr wm-k"/><path class="tz32fthpe wm-k"/><path class="o8k62ic-r wm-k"/><path class="bcnvpiq2v wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:user-round"} {...others} />);
}

export default Component;
