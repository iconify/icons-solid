import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psu7hxbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="psu7hxbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hard-drive"} {...others} />);
}

export default Component;
