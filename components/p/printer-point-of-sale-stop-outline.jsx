import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3r3qrb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3r3qrb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-point-of-sale-stop-outline"} {...others} />);
}

export default Component;
