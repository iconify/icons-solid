import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8zc9pbaf.css';
import '../../css/o/odesuob1o.css';
import '../../css/w/w5u_c5a9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8zc9pbaf"/><path clip-rule="evenodd" class="odesuob1o"/><path class="w5u_c5a9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-smartphone-bold-duotone"} {...others} />);
}

export default Component;
