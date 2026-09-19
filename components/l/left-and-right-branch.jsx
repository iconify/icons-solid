import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4hj9zscz.css';
import '../../css/a/awp_-7bqo.css';
import '../../css/m/m1xo0j-li.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n4hj9zscz"/><circle transform="matrix(-1 0 0 1 21 24)" class="awp_-7bqo"/><circle transform="matrix(-1 0 0 1 27 24)" class="awp_-7bqo"/><path class="m1xo0j-li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:left-and-right-branch"} {...others} />);
}

export default Component;
