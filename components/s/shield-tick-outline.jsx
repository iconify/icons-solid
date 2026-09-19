import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zcrig_nhd.css';
import '../../css/p/piq9lw_yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="shield-tick-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="zcrig_nhd"/><path class="piq9lw_yy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:shield-tick-outline"} {...others} />);
}

export default Component;
