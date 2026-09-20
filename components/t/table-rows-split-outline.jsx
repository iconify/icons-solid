import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzihu6mnd.css';
import '../../css/t/tkmbd-7nq.css';
import '../../css/c/cdk-29bud.css';
import '../../css/x/xcnzdwbbb.css';
import '../../css/l/lc79vcbth.css';
import '../../css/n/nko2_ol9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jzihu6mnd"/><path clip-rule="evenodd" class="tkmbd-7nq"/><path class="cdk-29bud"/><path class="xcnzdwbbb"/><path class="lc79vcbth"/><path class="nko2_ol9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-outline"} {...others} />);
}

export default Component;
