import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/romase2xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="romase2xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:goal-net"} {...others} />);
}

export default Component;
