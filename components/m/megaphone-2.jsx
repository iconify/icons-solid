import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_6s4abmo.css';
import '../../css/e/ebpsr_x9i.css';
import '../../css/h/hg1kllbxc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x_6s4abmo"/><path class="ebpsr_x9i"/><path class="hg1kllbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:megaphone-2"} {...others} />);
}

export default Component;
