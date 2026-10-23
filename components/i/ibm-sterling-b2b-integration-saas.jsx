import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozg9a2b_v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ozg9a2b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-sterling-b2b-integration-saas"} {...others} />);
}

export default Component;
