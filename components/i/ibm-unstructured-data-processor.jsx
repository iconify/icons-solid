import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_ld2sbji.css';
import '../../css/b/bswnp6bnx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x_ld2sbji"/><path class="bswnp6bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-unstructured-data-processor"} {...others} />);
}

export default Component;
