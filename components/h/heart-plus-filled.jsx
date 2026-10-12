import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1coifbia.css';
import '../../css/s/s6d7cubjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1coifbia"/><path class="s6d7cubjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-plus-filled"} {...others} />);
}

export default Component;
