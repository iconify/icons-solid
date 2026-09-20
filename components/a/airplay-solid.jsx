import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy4ebyq_a.css';
import '../../css/s/scn38ghnw.css';
import '../../css/n/n7ito-b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uy4ebyq_a"/><path class="scn38ghnw"/><path class="n7ito-b2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:airplay-solid"} {...others} />);
}

export default Component;
