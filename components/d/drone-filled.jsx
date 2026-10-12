import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcw_ncbqz.css';
import '../../css/z/zjahz3ydt.css';
import '../../css/u/upgqaocvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcw_ncbqz"/><path class="zjahz3ydt"/><path class="upgqaocvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:drone-filled"} {...others} />);
}

export default Component;
