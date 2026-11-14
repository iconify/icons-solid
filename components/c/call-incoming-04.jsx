import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_u3vybip.css';
import '../../css/l/lj7ufqojk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_u3vybip"/><path class="lj7ufqojk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-incoming-04"} {...others} />);
}

export default Component;
