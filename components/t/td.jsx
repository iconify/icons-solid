import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5-xrfb7g.css';
import '../../css/d/dgt2p61ky.css';
import '../../css/z/z3myrqbds.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="n5-xrfb7g"/><path class="dgt2p61ky"/><path class="z3myrqbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:td"} {...others} />);
}

export default Component;
