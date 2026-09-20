import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pracb0xpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pracb0xpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:email-mark-as-unread"} {...others} />);
}

export default Component;
