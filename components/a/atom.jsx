import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uxv7f4b_y.css';
import '../../css/y/y6pe4bckh.css';
import '../../css/c/cmpkjnb0y.css';
import '../../css/d/dx7k_3bea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uxv7f4b_y"/><path class="y6pe4bckh"/><path class="cmpkjnb0y"/><path class="dx7k_3bea wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:atom"} {...others} />);
}

export default Component;
