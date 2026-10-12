import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gng09bdfn.css';
import '../../css/d/dyii5ab_p.css';
import '../../css/x/xwm12jb_o.css';
import '../../css/f/f1aa_zbes.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gng09bdfn"/><path class="dyii5ab_p"/><path class="xwm12jb_o"/><path class="f1aa_zbes"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-check-20"} {...others} />);
}

export default Component;
