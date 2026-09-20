import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/adlaw-b6t.css';
import '../../css/p/pmwvkubtc.css';
import '../../css/g/gkiwa1bxg.css';
import '../../css/r/r02hdib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="adlaw-b6t"/><path class="pmwvkubtc"/><path class="gkiwa1bxg"/><path class="r02hdib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sd-card-broken"} {...others} />);
}

export default Component;
