import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdqopwbux.css';

const viewBox = {"width":24,"height":24,"left":0.1,"top":0.1};
const content = `<path class="hdqopwbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:droplet-outline"} {...others} />);
}

export default Component;
