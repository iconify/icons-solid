import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snm0mpkao.css';
import '../../css/r/rm_syy1jr.css';
import '../../css/r/rwupt7b_u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="snm0mpkao"/><path class="rm_syy1jr"/><path class="rwupt7b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:castle-20-bold"} {...others} />);
}

export default Component;
