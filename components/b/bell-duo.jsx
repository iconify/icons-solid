import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wq7rbfb9h.css';
import '../../css/s/shte9bcuj.css';
import '../../css/s/s1r0ezbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wq7rbfb9h"/><path class="shte9bcuj wm-a"/><path class="s1r0ezbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-duo"} {...others} />);
}

export default Component;
