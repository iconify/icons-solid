import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_8qc-bvt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g_8qc-bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:listing-lab-dark"} {...others} />);
}

export default Component;
