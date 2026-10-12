import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfa1yjcla.css';
import '../../css/j/j6hyv93_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfa1yjcla"/><path class="j6hyv93_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:picture-in-picture-2-filled"} {...others} />);
}

export default Component;
