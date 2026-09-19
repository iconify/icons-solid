import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvvs-6bny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lvvs-6bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:shapes"} {...others} />);
}

export default Component;
