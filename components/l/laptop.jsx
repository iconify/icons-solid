import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/j/jraqq0skq.css';
import '../../css/p/p83epn4av.css';
import '../../css/r/rbia2tbak.css';
import '../../css/k/k_u0s5xdp.css';
import '../../css/g/gpvosr9hv.css';
import '../../css/g/g-v3nnb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="jraqq0skq"/><path class="p83epn4av"/><path class="rbia2tbak"/><path class="k_u0s5xdp"/><path class="gpvosr9hv"/><path class="g-v3nnb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:laptop"} {...others} />);
}

export default Component;
