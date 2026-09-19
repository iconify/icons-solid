import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/u/udenbrg5g.css';
import '../../css/k/k29hr_b1a.css';
import '../../css/w/wh3hmm8wf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="udenbrg5g"/><path class="k29hr_b1a"/><path class="wh3hmm8wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:waterpolo"} {...others} />);
}

export default Component;
