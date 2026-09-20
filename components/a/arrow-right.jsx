import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3onnrp-a.css';
import '../../css/p/p4luhxbug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3onnrp-a"/><path class="p4luhxbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:arrow-right"} {...others} />);
}

export default Component;
