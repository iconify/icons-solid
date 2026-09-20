import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j750p1b9v.css';
import '../../css/i/iopw2xbzb.css';
import '../../css/f/fyy510_qu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="j750p1b9v"/><path class="iopw2xbzb"/><path class="fyy510_qu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:road-barrier"} {...others} />);
}

export default Component;
