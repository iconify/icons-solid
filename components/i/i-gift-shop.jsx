import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sucysfikq.css';
import '../../css/r/rifcqzbni.css';
import '../../css/n/nigjfvbya.css';
import '../../css/i/ibgenzjqo.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="sucysfikq"/><path class="rifcqzbni"/><path class="nigjfvbya"/><path class="ibgenzjqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-gift-shop"} {...others} />);
}

export default Component;
