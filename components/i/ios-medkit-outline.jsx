import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqm3cru9o.css';
import '../../css/u/up_x2juwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqm3cru9o"/><path class="up_x2juwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-medkit-outline"} {...others} />);
}

export default Component;
