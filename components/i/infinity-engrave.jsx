import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jd9mkhbdr.css';
import '../../css/o/omerkobbu.css';
import '../../css/t/tef1dsoih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jd9mkhbdr"/><path class="omerkobbu wm-shadow"/><path class="tef1dsoih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:infinity-engrave"} {...others} />);
}

export default Component;
