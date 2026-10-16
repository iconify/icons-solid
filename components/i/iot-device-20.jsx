import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onn6syb7h.css';
import '../../css/z/z6nk_cc1b.css';
import '../../css/c/c9a_4u5us.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="onn6syb7h"/><path class="z6nk_cc1b"/><path class="c9a_4u5us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iot-device-20"} {...others} />);
}

export default Component;
