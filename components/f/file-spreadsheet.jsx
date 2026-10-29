import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/f/fihmumb1d.css';
import '../../css/v/vf870b-qu.css';
import '../../css/e/epf3gvb-a.css';
import '../../css/e/ecbm2k1-l.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="fihmumb1d"/><path class="vf870b-qu"/><path class="epf3gvb-a"/><path class="ecbm2k1-l wm-shine"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-spreadsheet"} {...others} />);
}

export default Component;
