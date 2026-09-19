import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvxdfup1z.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="qvxdfup1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:lightbulb"} {...others} />);
}

export default Component;
