import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9f_3wnku.css';
import '../../css/n/n-pf8dtms.css';
import '../../css/t/tn_egrb9l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e9f_3wnku"/><path class="n-pf8dtms"/><path class="tn_egrb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-size-20"} {...others} />);
}

export default Component;
