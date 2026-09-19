import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpletlpsy.css';
import '../../css/t/teyp2chse.css';
import '../../css/e/e29_vw92i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dpletlpsy"/><path class="teyp2chse"/><path class="e29_vw92i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:tether"} {...others} />);
}

export default Component;
