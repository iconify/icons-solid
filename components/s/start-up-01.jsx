import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qyi84o_fy.css';
import '../../css/c/c1b25j7ao.css';
import '../../css/n/n1txf4mqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qyi84o_fy"/><path class="c1b25j7ao"/><path class="n1txf4mqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:start-up-01"} {...others} />);
}

export default Component;
