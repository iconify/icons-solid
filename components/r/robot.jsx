import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wak3971qn.css';
import '../../css/l/l7dmcacel.css';
import '../../css/p/phgkaibov.css';
import '../../css/u/uh5vum4qh.css';
import '../../css/t/tv-kmvola.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="wak3971qn"/><path class="l7dmcacel"/><rect class="phgkaibov"/><path class="uh5vum4qh"/><path class="tv-kmvola"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:robot"} {...others} />);
}

export default Component;
