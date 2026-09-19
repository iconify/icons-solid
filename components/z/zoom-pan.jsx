import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1ol51blr.css';
import '../../css/y/yzhyb8bwk.css';
import '../../css/p/p18cy_m8i.css';
import '../../css/l/lj5rkfb6q.css';
import '../../css/q/qy_260b7i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a1ol51blr"/><path class="yzhyb8bwk"/><path class="p18cy_m8i"/><path class="lj5rkfb6q"/><path class="qy_260b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:zoom-pan"} {...others} />);
}

export default Component;
