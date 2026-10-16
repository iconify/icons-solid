import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adofu2bem.css';
import '../../css/q/q_f2verot.css';
import '../../css/u/uzmog6blg.css';

const viewBox = {"width":91,"height":43};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGu9x5JcyK)" class="adofu2bem"/><defs><linearGradient id="SVGu9x5JcyK" x1="46" x2="66" y1="0" y2="80.5" gradientUnits="userSpaceOnUse"><stop class="q_f2verot"/><stop offset="1" class="uzmog6blg"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:infisical-dark"} {...others} />);
}

export default Component;
