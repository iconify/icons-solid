import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u2z4-vsfh.css';
import '../../css/i/i68-anrro.css';
import '../../css/r/rot3r_bpg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="u2z4-vsfh"/><path class="i68-anrro"/><path class="rot3r_bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:afferent"} {...others} />);
}

export default Component;
