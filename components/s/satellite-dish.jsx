import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kt2mzyb_p.css';
import '../../css/l/lmpy58ykz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kt2mzyb_p"/><path class="lmpy58ykz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:satellite-dish"} {...others} />);
}

export default Component;
