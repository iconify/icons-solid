import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhkfuibgv.css';
import '../../css/u/uz83tsgot.css';
import '../../css/p/phulogq2g.css';
import '../../css/j/jyhls43lm.css';
import '../../css/h/h1cpv9bly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jhkfuibgv"/><path class="uz83tsgot"/><path class="phulogq2g"/><path class="jyhls43lm"/><path class="h1cpv9bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fence"} {...others} />);
}

export default Component;
