import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd274hblz.css';
import '../../css/r/r0x_y24db.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zd274hblz"/><path class="r0x_y24db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:file-tray-full-sharp"} {...others} />);
}

export default Component;
