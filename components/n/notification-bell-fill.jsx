import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkul2mbam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkul2mbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-fill"} {...others} />);
}

export default Component;
