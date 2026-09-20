import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je4if2brg.css';
import '../../css/d/d863ihbff.css';
import '../../css/r/rprqesblq.css';
import '../../css/r/r3d0_z9ca.css';
import '../../css/g/g1zyj_bdi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="je4if2brg"/><path class="d863ihbff"/><path class="rprqesblq"/><path class="r3d0_z9ca"/><path class="g1zyj_bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-programming-bug"} {...others} />);
}

export default Component;
