import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap2lbxyik.css';
import '../../css/i/i5ku0ypxp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="ap2lbxyik clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 i5ku0ypxp"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cloud-network-line"} {...others} />);
}

export default Component;
