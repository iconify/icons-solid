import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whda0bbhs.css';
import '../../css/z/zw6kmbcxg.css';
import '../../css/r/r6me4vy1s.css';
import '../../css/c/c5p18jbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="whda0bbhs"/><path class="zw6kmbcxg"/><path class="r6me4vy1s"/><path class="c5p18jbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-grabbing"} {...others} />);
}

export default Component;
