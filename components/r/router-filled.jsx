import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt5vbccxc.css';
import '../../css/s/s6t1fwbej.css';
import '../../css/f/f57g08bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tt5vbccxc"/><path class="s6t1fwbej"/><path class="f57g08bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:router-filled"} {...others} />);
}

export default Component;
