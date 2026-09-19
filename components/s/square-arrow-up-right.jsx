import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw_r6bbym.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="hw_r6bbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:square-arrow-up-right"} {...others} />);
}

export default Component;
