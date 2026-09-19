import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu122ac1g.css';
import '../../css/s/s0ax18b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lu122ac1g"/><path class="s0ax18b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrowhead-right-outline"} {...others} />);
}

export default Component;
