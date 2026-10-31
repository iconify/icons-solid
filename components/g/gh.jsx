import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug9yri-qt.css';
import '../../css/f/fmudt6tcz.css';
import '../../css/r/r1wnigb9c.css';
import '../../css/e/etrreifsd.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="ug9yri-qt"/><path class="fmudt6tcz"/><path class="r1wnigb9c"/><path class="etrreifsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gh"} {...others} />);
}

export default Component;
