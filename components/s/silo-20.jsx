import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik-dwhbem.css';
import '../../css/b/bp5qez_qk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ik-dwhbem"/><path class="bp5qez_qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silo-20"} {...others} />);
}

export default Component;
