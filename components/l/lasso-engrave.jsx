import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/ptcsdyb2z.css';
import '../../css/m/mtw_nubmh.css';
import '../../css/y/yyja13b7h.css';
import '../../css/k/k56gh1yvu.css';
import '../../css/g/gxjs16b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ptcsdyb2z wm-k"/><path class="mtw_nubmh wm-a"/><path class="wm-shadow yyja13b7h"/><path class="k56gh1yvu wm-k"/><path class="gxjs16b5s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lasso-engrave"} {...others} />);
}

export default Component;
