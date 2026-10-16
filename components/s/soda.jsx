import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9149ht4q.css';
import '../../css/c/c5gammbcq.css';
import '../../css/g/g4yc_acbs.css';
import '../../css/d/dd735ebkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9149ht4q"/><path class="c5gammbcq"/><path class="g4yc_acbs"/><path class="dd735ebkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soda"} {...others} />);
}

export default Component;
