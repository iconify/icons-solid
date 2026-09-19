import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar_sh6b-t.css';

const viewBox = {"width":408,"height":432};
const content = `<path class="ar_sh6b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airplanemode-active"} {...others} />);
}

export default Component;
