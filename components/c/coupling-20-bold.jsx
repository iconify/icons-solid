import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iplcxaclv.css';
import '../../css/o/oqts9w9jb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iplcxaclv"/><path class="oqts9w9jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupling-20-bold"} {...others} />);
}

export default Component;
