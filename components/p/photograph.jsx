import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gjb1_moez.css';
import '../../css/p/pjt-6tbav.css';
import '../../css/u/usic9obso.css';
import '../../css/p/pbk9vigpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="gjb1_moez"/><path class="pjt-6tbav"/><path class="usic9obso"/><path class="pbk9vigpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:photograph"} {...others} />);
}

export default Component;
