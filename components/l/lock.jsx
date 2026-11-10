import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw37gnbno.css';
import '../../css/v/vr_fvtbjq.css';
import '../../css/a/aqcce2f6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="xw37gnbno"/><path class="vr_fvtbjq"/><circle class="aqcce2f6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:lock"} {...others} />);
}

export default Component;
