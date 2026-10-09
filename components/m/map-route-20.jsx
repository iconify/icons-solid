import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovcrl6b2y.css';
import '../../css/a/a9_-6201d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ovcrl6b2y"/><path class="a9_-6201d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-route-20"} {...others} />);
}

export default Component;
