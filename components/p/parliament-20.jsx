import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bizml48vp.css';
import '../../css/r/r-vw3obhe.css';
import '../../css/r/rk9-55a5q.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bizml48vp"/><path class="r-vw3obhe"/><path class="rk9-55a5q"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parliament-20"} {...others} />);
}

export default Component;
