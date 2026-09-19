import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk2_g9b7k.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="qk2_g9b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:building-circle-arrow-right"} {...others} />);
}

export default Component;
