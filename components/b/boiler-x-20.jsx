import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn29nlyjq.css';
import '../../css/u/uktn-1b8e.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tn29nlyjq"/><path class="uktn-1b8e"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-x-20"} {...others} />);
}

export default Component;
