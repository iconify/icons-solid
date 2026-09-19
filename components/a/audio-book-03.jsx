import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y7dj--m8h.css';
import '../../css/t/tu--bwbmo.css';
import '../../css/q/qdc-w_0om.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="y7dj--m8h"/><path class="tu--bwbmo"/><path class="qdc-w_0om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:audio-book-03"} {...others} />);
}

export default Component;
