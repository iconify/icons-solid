import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij_yecsrd.css';
import '../../css/i/ihj0a5_zp.css';
import '../../css/r/r8m749-bj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ij_yecsrd"/><path class="ihj0a5_zp"/><path class="r8m749-bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-heating-20-bold"} {...others} />);
}

export default Component;
