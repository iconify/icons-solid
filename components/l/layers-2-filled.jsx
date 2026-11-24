import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db1241bah.css';
import '../../css/l/l_9-3eagj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="db1241bah"/><path class="l_9-3eagj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layers-2-filled"} {...others} />);
}

export default Component;
