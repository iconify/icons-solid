import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rf2qvebmu.css';
import '../../css/i/ilj9p1g-d.css';
import '../../css/c/c0njsobpg.css';
import '../../css/l/lfsq1wbib.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rf2qvebmu"/><path class="ilj9p1g-d"/><path class="c0njsobpg"/><rect class="lfsq1wbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:retro-bag"} {...others} />);
}

export default Component;
