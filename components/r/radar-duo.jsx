import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/w/wc2i5q86a.css';
import '../../css/l/lj8hq4byv.css';
import '../../css/p/pkdx_7b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="wc2i5q86a wm-a"/><path class="lj8hq4byv"/><path class="pkdx_7b-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radar-duo"} {...others} />);
}

export default Component;
