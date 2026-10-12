import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gng09bdfn.css';
import '../../css/d/dyii5ab_p.css';
import '../../css/x/xwm12jb_o.css';
import '../../css/f/f1aa_zbes.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gng09bdfn"/><path class="dyii5ab_p"/><path class="xwm12jb_o"/><path class="f1aa_zbes"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-x-20"} {...others} />);
}

export default Component;
