import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pg4sf2b3m.css';
import '../../css/d/d9s_pfy-b.css';
import '../../css/k/k00e8jbln.css';
import '../../css/a/aodls9b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pg4sf2b3m"/><path class="d9s_pfy-b"/><path class="k00e8jbln"/><path class="aodls9b8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:reload-window"} {...others} />);
}

export default Component;
