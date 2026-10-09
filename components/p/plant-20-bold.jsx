import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbo2x6civ.css';
import '../../css/a/a-b9sjb0f.css';
import '../../css/r/roiba_3fu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jbo2x6civ"/><path class="a-b9sjb0f"/><path class="roiba_3fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-20-bold"} {...others} />);
}

export default Component;
