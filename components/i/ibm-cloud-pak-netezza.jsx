import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufa-0g21i.css';
import '../../css/a/a_-4bw6-y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ufa-0g21i"/><path class="a_-4bw6-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-pak-netezza"} {...others} />);
}

export default Component;
