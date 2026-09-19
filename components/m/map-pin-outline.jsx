import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lqeh93bxb.css';
import '../../css/s/st8wzxn7b.css';
import '../../css/o/o52ps1b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="map-pin-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="lqeh93bxb"/><path class="st8wzxn7b"/><path class="o52ps1b-i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:map-pin-outline"} {...others} />);
}

export default Component;
