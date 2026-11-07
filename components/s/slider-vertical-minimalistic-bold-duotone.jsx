import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1h75hc1u.css';
import '../../css/l/lhcz5yp5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1h75hc1u"/><path clip-rule="evenodd" class="lhcz5yp5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
