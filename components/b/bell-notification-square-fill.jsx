import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk3rxbbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk3rxbbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bell-notification-square-fill"} {...others} />);
}

export default Component;
