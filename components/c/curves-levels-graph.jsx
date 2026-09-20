import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/idsb5nb-n.css';
import '../../css/i/ihffidclk.css';
import '../../css/d/d7f84cbvk.css';
import '../../css/n/n7safbcwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="idsb5nb-n"/><path class="ihffidclk"/><path class="d7f84cbvk"/><path class="n7safbcwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:curves-levels-graph"} {...others} />);
}

export default Component;
