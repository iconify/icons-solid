import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k1xy1ttvm.css';
import '../../css/w/w_e3c8bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k1xy1ttvm"/><path class="w_e3c8bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-bottom"} {...others} />);
}

export default Component;
