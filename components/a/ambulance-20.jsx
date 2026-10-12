import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um9jo7bca.css';
import '../../css/r/r5ivvvbes.css';
import '../../css/g/gj6i34ybh.css';
import '../../css/c/c49ot4bag.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="um9jo7bca"/><path class="r5ivvvbes"/><path class="gj6i34ybh"/><path class="c49ot4bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ambulance-20"} {...others} />);
}

export default Component;
