import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t6-jjabzv.css';
import '../../css/r/rwyyhnb2f.css';
import '../../css/e/e8gjtcbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t6-jjabzv"/><path class="rwyyhnb2f"/><path class="e8gjtcbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-shake-broken"} {...others} />);
}

export default Component;
