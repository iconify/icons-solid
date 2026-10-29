import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn7y4xrzu.css';
import '../../css/e/euwycbbrp.css';
import '../../css/o/omy4qb13w.css';
import '../../css/z/zvy53zbam.css';
import '../../css/o/ofkd-xt2w.css';
import '../../css/m/mylbeqpxz.css';
import '../../css/e/ex6n0fb2e.css';
import '../../css/v/vzc36efuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pn7y4xrzu wm-shadow"/><path class="euwycbbrp wm-shadow"/><path class="omy4qb13w"/><path class="zvy53zbam"/><path class="ofkd-xt2w"/><path class="mylbeqpxz"/><path class="ex6n0fb2e"/><path class="vzc36efuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:palette"} {...others} />);
}

export default Component;
