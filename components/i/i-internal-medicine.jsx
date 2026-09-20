import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq52dvbdr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="aq52dvbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-internal-medicine"} {...others} />);
}

export default Component;
