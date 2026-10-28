import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3i-qdbpg.css';
import '../../css/y/yn436cvro.css';
import '../../css/p/pdf-ob65e.css';
import '../../css/w/wsvws5b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3i-qdbpg"/><path class="yn436cvro"/><path class="pdf-ob65e"/><path class="wsvws5b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-scan"} {...others} />);
}

export default Component;
