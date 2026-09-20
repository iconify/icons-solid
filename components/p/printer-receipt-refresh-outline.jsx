import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynbx3b35w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynbx3b35w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-receipt-refresh-outline"} {...others} />);
}

export default Component;
