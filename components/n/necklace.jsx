import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oj79fp0oa.css';
import '../../css/f/fr4pg2b_d.css';
import '../../css/o/ojke_mb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oj79fp0oa"/><path class="fr4pg2b_d"/><path class="ojke_mb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:necklace"} {...others} />);
}

export default Component;
