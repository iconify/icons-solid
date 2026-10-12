import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao-tyjbir.css';
import '../../css/r/rtr7zsbdu.css';
import '../../css/d/don67qb2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ao-tyjbir"/><path class="rtr7zsbdu"/><path class="don67qb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:angle-grinder-20"} {...others} />);
}

export default Component;
