import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lpx5w1bem.css';
import '../../css/u/ux20bf5oc.css';
import '../../css/g/g5fsc_b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lpx5w1bem"/><path class="ux20bf5oc"/><path class="g5fsc_b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:underpants-01"} {...others} />);
}

export default Component;
