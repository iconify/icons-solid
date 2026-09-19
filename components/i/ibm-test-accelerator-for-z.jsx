import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2mgj9h3g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k2mgj9h3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-test-accelerator-for-z"} {...others} />);
}

export default Component;
