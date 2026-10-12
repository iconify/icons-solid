import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwffkb-o.css';
import '../../css/l/lqofgujgs.css';
import '../../css/r/rtszrhbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="snwffkb-o"/><path class="lqofgujgs"/><path class="rtszrhbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heart-pulse"} {...others} />);
}

export default Component;
