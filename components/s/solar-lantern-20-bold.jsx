import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuac8wbht.css';
import '../../css/a/a1eqfi1lp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yuac8wbht"/><path class="a1eqfi1lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-lantern-20-bold"} {...others} />);
}

export default Component;
