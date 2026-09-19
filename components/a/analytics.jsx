import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ru1ae30ek.css';
import '../../css/h/hbitvks7s.css';
import '../../css/a/am48ss4er.css';
import '../../css/w/wo_-lacfx.css';
import '../../css/k/kytzhiaey.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ru1ae30ek"/><path class="hbitvks7s"/><path class="am48ss4er"/><path clip-rule="evenodd" class="wo_-lacfx"/><path class="kytzhiaey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:analytics"} {...others} />);
}

export default Component;
