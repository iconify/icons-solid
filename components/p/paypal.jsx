import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfneizbci.css';
import '../../css/g/g81nz19ce.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vfneizbci"/><path class="g81nz19ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:paypal"} {...others} />);
}

export default Component;
