import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r4eb564mb.css';
import '../../css/c/c18re7vav.css';
import '../../css/n/njoak0bdt.css';
import '../../css/e/es9uiwbnk.css';
import '../../css/x/xb8_cbr0c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="r4eb564mb"/><path class="c18re7vav"/><path class="njoak0bdt"/><circle transform="rotate(45 26.041 22.042)" class="es9uiwbnk"/><path class="xb8_cbr0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:microscope-one"} {...others} />);
}

export default Component;
