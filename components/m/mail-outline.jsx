import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4gmmqchl.css';
import '../../css/r/rhqsj1c8y.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="k4gmmqchl"/><path class="rhqsj1c8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mail-outline"} {...others} />);
}

export default Component;
