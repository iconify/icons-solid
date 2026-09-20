import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8kxd3r3a.css';
import '../../css/n/nr1jxib6k.css';
import '../../css/c/cqmrw01nf.css';
import '../../css/z/zud47abkq.css';
import '../../css/v/v5zwtibtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x8kxd3r3a"/><path class="nr1jxib6k"/><path class="cqmrw01nf"/><path class="zud47abkq"/><path class="v5zwtibtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-bold-duotone"} {...others} />);
}

export default Component;
