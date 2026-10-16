import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2m6mk_mr.css';
import '../../css/l/ljtf0ybqg.css';
import '../../css/i/ixhsczgzl.css';
import '../../css/s/sxr-mzwmz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w2m6mk_mr"/><path class="ljtf0ybqg"/><path class="ixhsczgzl"/><path class="sxr-mzwmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-dish-20-bold"} {...others} />);
}

export default Component;
