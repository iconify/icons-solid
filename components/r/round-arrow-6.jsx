import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uatcl-bly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uatcl-bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:round-arrow-6"} {...others} />);
}

export default Component;
