import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t2fkmoivg.css';
import '../../css/j/j1bbo3bbt.css';
import '../../css/j/j43jx7okr.css';
import '../../css/u/uulvq9b8e.css';
import '../../css/r/rurpwmbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t2fkmoivg"/><path class="j1bbo3bbt wm-k"/><path class="j43jx7okr wm-a"/><path class="uulvq9b8e wm-k"/><path class="rurpwmbun wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snow-globe-sketch"} {...others} />);
}

export default Component;
