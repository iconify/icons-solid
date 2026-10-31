import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gytzzwn0o.css';
import '../../css/r/rgxdrrb8l.css';
import '../../css/p/p_wu6crxh.css';
import '../../css/h/hu67qr54v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gytzzwn0o wm-shadow"/><path class="rgxdrrb8l"/><path class="p_wu6crxh"/><path class="hu67qr54v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:router"} {...others} />);
}

export default Component;
