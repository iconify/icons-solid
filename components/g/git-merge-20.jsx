import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgbvxq5ir.css';
import '../../css/r/r7c5xu-gz.css';
import '../../css/t/to374yt6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rgbvxq5ir"/><path class="r7c5xu-gz"/><path class="to374yt6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-merge-20"} {...others} />);
}

export default Component;
