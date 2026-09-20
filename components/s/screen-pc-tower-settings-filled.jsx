import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyw221b0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="yyw221b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:screen-pc-tower-settings-filled"} {...others} />);
}

export default Component;
