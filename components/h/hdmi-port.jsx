import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6wsnfb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6wsnfb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hdmi-port"} {...others} />);
}

export default Component;
