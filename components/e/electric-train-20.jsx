import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4es65b1e.css';
import '../../css/f/f1nb5abut.css';
import '../../css/s/spc7yovzj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q4es65b1e"/><path class="f1nb5abut"/><path class="spc7yovzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-train-20"} {...others} />);
}

export default Component;
