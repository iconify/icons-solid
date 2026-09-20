import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idppisblu.css';
import '../../css/j/j18770bgi.css';
import '../../css/w/wd27zub3a.css';
import '../../css/b/bp8plebcr.css';
import '../../css/r/rivq1nv_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="idppisblu"/><path class="j18770bgi"/><circle class="wd27zub3a"/><path class="bp8plebcr"/><path class="rivq1nv_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-line-duotone"} {...others} />);
}

export default Component;
