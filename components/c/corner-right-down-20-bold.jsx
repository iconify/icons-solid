import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tex_f1bsd.css';
import '../../css/q/q4u-icn5d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tex_f1bsd"/><path class="q4u-icn5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-down-20-bold"} {...others} />);
}

export default Component;
