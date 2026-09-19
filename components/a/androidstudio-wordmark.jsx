import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1kda8_rz.css';
import '../../css/b/bi8vxwb8z.css';
import '../../css/v/vbaged_wf.css';
import '../../css/l/l1ghlxbtu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r1kda8_rz"/><path class="bi8vxwb8z"/><path class="vbaged_wf"/><circle class="l1ghlxbtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:androidstudio-wordmark"} {...others} />);
}

export default Component;
