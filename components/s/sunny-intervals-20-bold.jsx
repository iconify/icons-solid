import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo10pr4qb.css';
import '../../css/j/j3e_0zbsp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uo10pr4qb"/><path class="j3e_0zbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunny-intervals-20-bold"} {...others} />);
}

export default Component;
