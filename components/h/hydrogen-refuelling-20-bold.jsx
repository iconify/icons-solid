import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pskk51bhe.css';
import '../../css/a/a23a_oamq.css';
import '../../css/m/mx-3s0wlz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pskk51bhe"/><path class="a23a_oamq"/><path class="mx-3s0wlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-refuelling-20-bold"} {...others} />);
}

export default Component;
