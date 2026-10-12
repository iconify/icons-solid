import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4y1onb8u.css';
import '../../css/y/ybqrj5brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o4y1onb8u"/><path class="ybqrj5brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-check-filled"} {...others} />);
}

export default Component;
