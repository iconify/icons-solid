import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dfj_3yboj.css';
import '../../css/a/ao_zh-bjm.css';
import '../../css/r/r377t0ghm.css';
import '../../css/v/vhsjh8bib.css';
import '../../css/j/jjdkbeblc.css';
import '../../css/k/kt7t3876q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dfj_3yboj wm-shadow"/><path class="ao_zh-bjm"/><path class="r377t0ghm"/><path class="vhsjh8bib"/><path class="jjdkbeblc"/><path class="kt7t3876q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:axe"} {...others} />);
}

export default Component;
