import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryulj6g2t.css';
import '../../css/m/m2znp0otn.css';
import '../../css/w/wq3hahbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 19.8 -19.43)scale(1 -1)" class="ryulj6g2t"/><path class="m2znp0otn"/><path class="wq3hahbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:draw-freehand"} {...others} />);
}

export default Component;
