import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np-fm_bvg.css';
import '../../css/o/oclwabc9g.css';
import '../../css/u/u7sropn0u.css';
import '../../css/n/nmo4l-b4f.css';
import '../../css/e/esohy4kkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="np-fm_bvg"/><path class="oclwabc9g"/><path class="u7sropn0u"/><path class="nmo4l-b4f"/><path class="esohy4kkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-outline"} {...others} />);
}

export default Component;
