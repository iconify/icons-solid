import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5h8h31za.css';

const viewBox = {"width":272,"height":512};
const content = `<path class="q5h8h31za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:bluetooth-setting"} {...others} />);
}

export default Component;
