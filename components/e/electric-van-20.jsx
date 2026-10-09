import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzfty7p4v.css';
import '../../css/f/f_lzw-bhd.css';
import '../../css/y/y5vn0krru.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nzfty7p4v"/><path class="f_lzw-bhd"/><path class="y5vn0krru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-van-20"} {...others} />);
}

export default Component;
