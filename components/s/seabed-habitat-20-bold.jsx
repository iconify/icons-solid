import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv842m9yr.css';
import '../../css/u/um4pykb1b.css';
import '../../css/d/d8en99qry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv842m9yr"/><path class="um4pykb1b"/><path class="d8en99qry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-habitat-20-bold"} {...others} />);
}

export default Component;
