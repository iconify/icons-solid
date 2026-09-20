import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0u3qtbzv.css';
import '../../css/u/upvp15d9x.css';
import '../../css/w/war5z0bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e0u3qtbzv"/><path class="upvp15d9x"/><path class="war5z0bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-warning-broken"} {...others} />);
}

export default Component;
