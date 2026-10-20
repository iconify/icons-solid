import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzoimlb-v.css';
import '../../css/p/pemqbc__o.css';
import '../../css/p/p3q4orbqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wzoimlb-v"/><path class="pemqbc__o"/><path class="p3q4orbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:passkey-20"} {...others} />);
}

export default Component;
