import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53e0bcnh.css';
import '../../css/p/phkuhv_dq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s53e0bcnh"/><path class="phkuhv_dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-brightgauge-light"} {...others} />);
}

export default Component;
