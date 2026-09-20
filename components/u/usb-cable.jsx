import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8lcj2d8b.css';
import '../../css/i/i2934ybue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s8lcj2d8b"/><path class="i2934ybue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:usb-cable"} {...others} />);
}

export default Component;
