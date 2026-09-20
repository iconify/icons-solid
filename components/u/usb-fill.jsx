import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd1p3wbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qd1p3wbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:usb-fill"} {...others} />);
}

export default Component;
