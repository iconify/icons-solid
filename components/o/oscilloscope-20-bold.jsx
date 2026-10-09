import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgdmwwbvt.css';
import '../../css/j/jk8gvlbwz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rgdmwwbvt"/><path class="jk8gvlbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oscilloscope-20-bold"} {...others} />);
}

export default Component;
