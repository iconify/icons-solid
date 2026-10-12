import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8o7esb0b.css';
import '../../css/l/lkctm_bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8o7esb0b"/><path clip-rule="evenodd" class="lkctm_bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:egg-fried-filled"} {...others} />);
}

export default Component;
