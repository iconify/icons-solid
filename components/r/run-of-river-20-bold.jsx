import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_i3djllq.css';
import '../../css/p/p8remmbsz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s_i3djllq"/><path class="p8remmbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:run-of-river-20-bold"} {...others} />);
}

export default Component;
