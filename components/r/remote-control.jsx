import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0_n5sdns.css';

const viewBox = {"width":336,"height":496};
const content = `<path class="s0_n5sdns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:remote-control"} {...others} />);
}

export default Component;
