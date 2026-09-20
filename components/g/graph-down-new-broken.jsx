import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ley58n3yy.css';
import '../../css/u/u00ey8bps.css';
import '../../css/a/ab62pjuns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ley58n3yy"/><circle class="u00ey8bps"/><path class="ab62pjuns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-down-new-broken"} {...others} />);
}

export default Component;
