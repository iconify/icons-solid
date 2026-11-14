import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u0fgibbvn.css';
import '../../css/j/j_u3vybip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u0fgibbvn"/><path class="j_u3vybip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-missed-03"} {...others} />);
}

export default Component;
