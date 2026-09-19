import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ece_obukg.css';
import '../../css/d/d-c_9e2ou.css';
import '../../css/x/x3lv_0s-z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ece_obukg"/><path class="d-c_9e2ou"/><path class="x3lv_0s-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:moneywithwings"} {...others} />);
}

export default Component;
