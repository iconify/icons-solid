import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx4wm_5bj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nx4wm_5bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:mountain-solid"} {...others} />);
}

export default Component;
