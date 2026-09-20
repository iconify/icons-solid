import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/j/jot55yhti.css';
import '../../css/x/x4pob2bni.css';
import '../../css/b/bcpsrtbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="fr_tmn9fp"/><path class="jot55yhti"/><path class="x4pob2bni"/><path class="bcpsrtbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-minimalistic-linear"} {...others} />);
}

export default Component;
