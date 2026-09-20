import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/b/blo41m3ob.css';
import '../../css/u/u4qnnrb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="fr_tmn9fp"/><path class="blo41m3ob"/><path class="u4qnnrb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-broken"} {...others} />);
}

export default Component;
