import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r5fahkzon.css';
import '../../css/g/g7hqkcb6k.css';
import '../../css/t/tokx6ighc.css';
import '../../css/u/upvp15d9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r5fahkzon"/><path class="g7hqkcb6k"/><path class="tokx6ighc"/><path class="upvp15d9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-network-broken"} {...others} />);
}

export default Component;
