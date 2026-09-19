import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/huq1_xb7l.css';
import '../../css/t/tqg-95b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="huq1_xb7l"/><path class="tqg-95b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:purse"} {...others} />);
}

export default Component;
