import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcwf7omms.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hcwf7omms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-cloud-remove-cloud-network-internet-subtract-minus-server-remove"} {...others} />);
}

export default Component;
