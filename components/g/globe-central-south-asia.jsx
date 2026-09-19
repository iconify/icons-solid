import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd58ee2ql.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nd58ee2ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:globe-central-south-asia"} {...others} />);
}

export default Component;
