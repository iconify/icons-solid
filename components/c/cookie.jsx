import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/prwrr3loe.css';
import '../../css/a/a8rtq7b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="prwrr3loe"/><path class="a8rtq7b8k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cookie"} {...others} />);
}

export default Component;
