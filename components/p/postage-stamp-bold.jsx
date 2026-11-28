import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5ihe_5ob.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="k5ihe_5ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:postage-stamp-bold"} {...others} />);
}

export default Component;
