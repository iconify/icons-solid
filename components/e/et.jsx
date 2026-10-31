import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyjijmsrp.css';
import '../../css/e/e2dazz0pq.css';
import '../../css/v/v8ujeyanp.css';
import '../../css/v/vgvagbcxe.css';
import '../../css/i/iqdea8dqb.css';
import '../../css/g/g6_zw3j4m.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="oyjijmsrp"/><path class="e2dazz0pq"/><path class="v8ujeyanp"/><circle class="vgvagbcxe"/><path class="iqdea8dqb"/><path class="g6_zw3j4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:et"} {...others} />);
}

export default Component;
