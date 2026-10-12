import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9fpfpb1i.css';
import '../../css/d/diwo_7x5o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y9fpfpb1i"/><path class="diwo_7x5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scanner-20-bold"} {...others} />);
}

export default Component;
