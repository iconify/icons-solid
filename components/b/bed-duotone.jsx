import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhcedhb7f.css';
import '../../css/k/knbgc0bhr.css';
import '../../css/k/ksm8fhndt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zhcedhb7f"/><path class="knbgc0bhr"/><path class="ksm8fhndt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bed-duotone"} {...others} />);
}

export default Component;
