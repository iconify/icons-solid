import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dungusb0h.css';
import '../../css/w/wx-9qrjxn.css';
import '../../css/j/jjk_8ebes.css';
import '../../css/g/gxzkh2b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dungusb0h"/><path class="wx-9qrjxn"/><path class="jjk_8ebes"/><path class="gxzkh2b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-2-bold-duotone"} {...others} />);
}

export default Component;
