import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c4811sh4p.css';
import '../../css/l/lxu2bbcju.css';
import '../../css/l/lzi1sccmr.css';
import '../../css/r/rlttj4b8m.css';
import '../../css/m/mh8rzrbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c4811sh4p"/><path class="lxu2bbcju"/><path class="lzi1sccmr"/><path class="rlttj4b8m"/><path class="mh8rzrbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-linear"} {...others} />);
}

export default Component;
