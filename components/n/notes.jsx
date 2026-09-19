import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kgtfhz94h.css';
import '../../css/s/smdm4abnm.css';
import '../../css/u/u8vdedb1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="kgtfhz94h"/><path class="smdm4abnm"/><path class="u8vdedb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:notes"} {...others} />);
}

export default Component;
