import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/ban8_0bod.css';
import '../../css/f/fnpjw3bbm.css';
import '../../css/e/elnpcezsu.css';
import '../../css/h/ha-6yibsf.css';
import '../../css/k/k26yyvc5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ban8_0bod wm-k"/><path class="fnpjw3bbm wm-a"/><path class="elnpcezsu wm-shadow"/><path class="ha-6yibsf wm-k"/><path class="k26yyvc5e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:footprints-engrave"} {...others} />);
}

export default Component;
