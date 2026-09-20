import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izbwaibpn.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};
const content = `<path class="izbwaibpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:temperature"} {...others} />);
}

export default Component;
