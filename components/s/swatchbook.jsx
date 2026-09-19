import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crpuohb2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="crpuohb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:swatchbook"} {...others} />);
}

export default Component;
