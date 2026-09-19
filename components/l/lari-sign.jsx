import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us-2mi8ki.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="us-2mi8ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:lari-sign"} {...others} />);
}

export default Component;
