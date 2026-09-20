import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo9-u_9hr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mo9-u_9hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:broom"} {...others} />);
}

export default Component;
