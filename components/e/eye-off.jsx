import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/helfofbfk.css';
import '../../css/d/dfcrdybmo.css';
import '../../css/v/vyszwzp6v.css';
import '../../css/r/rdn2jqb0z.css';
import '../../css/n/ngkozcc9l.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="helfofbfk wm-shadow"/><path class="dfcrdybmo"/><path class="vyszwzp6v"/><path class="rdn2jqb0z"/><path class="ngkozcc9l"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:eye-off"} {...others} />);
}

export default Component;
