import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcomkx86t.css';
import '../../css/h/hjxuj8mwg.css';
import '../../css/c/c7xn2nbzm.css';
import '../../css/o/o-e951b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mcomkx86t"/><path class="hjxuj8mwg wm-a"/><path class="c7xn2nbzm wm-k"/><path class="o-e951b5s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-audio-sketch"} {...others} />);
}

export default Component;
