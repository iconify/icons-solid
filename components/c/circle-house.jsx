import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j7uki_xzo.css';
import '../../css/t/t7h38m1ve.css';
import '../../css/p/pdxi1upzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j7uki_xzo"/><rect class="t7h38m1ve"/><rect class="pdxi1upzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circle-house"} {...others} />);
}

export default Component;
