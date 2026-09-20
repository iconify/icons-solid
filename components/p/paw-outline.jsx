import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ptqbabcmv.css';
import '../../css/m/mzy2mhzrn.css';
import '../../css/c/cdianvu6r.css';
import '../../css/v/vu5fr_lab.css';
import '../../css/t/t8dah2_ly.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ptqbabcmv"/><path class="mzy2mhzrn"/><path class="cdianvu6r"/><path class="vu5fr_lab"/><path class="t8dah2_ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paw-outline"} {...others} />);
}

export default Component;
