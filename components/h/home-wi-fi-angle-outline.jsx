import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mopsj6imq.css';
import '../../css/j/jr8l-bcpw.css';
import '../../css/h/hl0_aw4ei.css';
import '../../css/w/wru8zmbec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mopsj6imq"/><path class="jr8l-bcpw"/><path class="hl0_aw4ei"/><path clip-rule="evenodd" class="wru8zmbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wi-fi-angle-outline"} {...others} />);
}

export default Component;
