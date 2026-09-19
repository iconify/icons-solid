import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u24jj7bob.css';
import '../../css/c/ctlov-l8x.css';
import '../../css/l/lw2svwf7m.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="u24jj7bob"/><path class="ctlov-l8x"/><path class="lw2svwf7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lu"} {...others} />);
}

export default Component;
