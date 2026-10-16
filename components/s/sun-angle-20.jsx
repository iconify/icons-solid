import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3o57d_5v.css';
import '../../css/g/g_pbthpru.css';
import '../../css/v/vlpxa7bvf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h3o57d_5v"/><path class="g_pbthpru"/><path class="vlpxa7bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-angle-20"} {...others} />);
}

export default Component;
