import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/q/q83xo3b_h.css';
import '../../css/s/s7b7bgbvx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="psxdx4bcl"/><circle class="q83xo3b_h"/><path class="s7b7bgbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:videocamera"} {...others} />);
}

export default Component;
