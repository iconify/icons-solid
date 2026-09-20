import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4zk5lb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4zk5lb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:maintenance-rhomb-filled"} {...others} />);
}

export default Component;
