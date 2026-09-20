import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv4_ow18w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv4_ow18w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dice-3-fill"} {...others} />);
}

export default Component;
