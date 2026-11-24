import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikzgpudrt.css';
import '../../css/d/dxc9wabla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikzgpudrt"/><path class="dxc9wabla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-check-filled"} {...others} />);
}

export default Component;
