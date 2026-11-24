import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhblkjbdv.css';
import '../../css/s/stisajbpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhblkjbdv"/><path class="stisajbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-rain-wind-filled"} {...others} />);
}

export default Component;
