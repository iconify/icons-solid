import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x5t60kbnz.css';
import '../../css/i/ifwka7jyb.css';
import '../../css/t/tti1bth-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x5t60kbnz"/><path class="ifwka7jyb"/><path class="tti1bth-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-safe"} {...others} />);
}

export default Component;
