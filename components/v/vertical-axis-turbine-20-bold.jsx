import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejhk40bjj.css';
import '../../css/f/fg50i1ydo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ejhk40bjj"/><path class="fg50i1ydo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vertical-axis-turbine-20-bold"} {...others} />);
}

export default Component;
