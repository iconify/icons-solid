import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiz7ntixz.css';
import '../../css/p/pds76bc9q.css';
import '../../css/o/ov285yggp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hiz7ntixz"/><path class="pds76bc9q"/><path class="ov285yggp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:park-and-ride-20-bold"} {...others} />);
}

export default Component;
