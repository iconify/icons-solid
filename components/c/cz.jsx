import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn3x9gn0i.css';
import '../../css/r/r_i9c3bep.css';
import '../../css/u/uaelztb0z.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="wn3x9gn0i"/><path class="r_i9c3bep"/><path class="uaelztb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cz"} {...others} />);
}

export default Component;
