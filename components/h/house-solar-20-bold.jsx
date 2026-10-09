import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iur812moa.css';
import '../../css/y/y40w3sucp.css';
import '../../css/o/o6x3htbqm.css';
import '../../css/r/rzkosvb-d.css';
import '../../css/z/zkili02bk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iur812moa"/><path class="y40w3sucp"/><path class="o6x3htbqm"/><path class="rzkosvb-d"/><path class="zkili02bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-solar-20-bold"} {...others} />);
}

export default Component;
