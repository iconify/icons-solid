import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/v/vdm0kwtim.css';
import '../../css/k/k835aeb6v.css';
import '../../css/g/gmh0yi24p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="vdm0kwtim wm-shadow"/><path class="k835aeb6v"/><path class="gmh0yi24p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:film"} {...others} />);
}

export default Component;
