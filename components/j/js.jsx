import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abi5rp9im.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="abi5rp9im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:js"} {...others} />);
}

export default Component;
