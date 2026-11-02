import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uip1_obsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uip1_obsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lemon-squeezy-line"} {...others} />);
}

export default Component;
