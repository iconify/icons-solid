import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbft5vf0c.css';
import '../../css/s/s2k0i-b_b.css';
import '../../css/f/f4oz41rqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbft5vf0c"/><path class="s2k0i-b_b"/><path class="f4oz41rqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:graduation-cap-duotone"} {...others} />);
}

export default Component;
