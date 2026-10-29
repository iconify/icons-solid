import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/np63e2b1o.css';
import '../../css/p/p0q2sxjnz.css';
import '../../css/h/hqyg-9bir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="np63e2b1o"/><path class="p0q2sxjnz wm-a"/><path class="hqyg-9bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:traffic-light-duo"} {...others} />);
}

export default Component;
