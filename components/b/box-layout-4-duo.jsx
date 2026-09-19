import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn7sfubln.css';
import '../../css/w/wqv4fibjt.css';
import '../../css/h/hppgl373x.css';
import '../../css/a/aqkliebgu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fn7sfubln"/><path clip-rule="evenodd" class="wqv4fibjt"/><path class="hppgl373x"/><path clip-rule="evenodd" class="aqkliebgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-4-duo"} {...others} />);
}

export default Component;
