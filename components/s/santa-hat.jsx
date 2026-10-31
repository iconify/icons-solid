import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u01elts_y.css';
import '../../css/z/z712tk0eb.css';
import '../../css/f/fn69l6bme.css';
import '../../css/u/u1mcb6b2z.css';
import '../../css/m/mdau48_gg.css';
import '../../css/m/m05liva_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u01elts_y wm-shadow"/><path class="z712tk0eb"/><path class="fn69l6bme"/><path class="u1mcb6b2z"/><path class="mdau48_gg"/><path class="m05liva_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:santa-hat"} {...others} />);
}

export default Component;
