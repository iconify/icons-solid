import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rpq-14kgr.css';
import '../../css/c/cfyiqqbvt.css';
import '../../css/m/mw8gmlbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="refresh-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="rpq-14kgr"/><path class="cfyiqqbvt"/><path class="mw8gmlbee"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:refresh-outline"} {...others} />);
}

export default Component;
