import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/amquopt5s.css';
import '../../css/x/xcu0ugb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="amquopt5s"/><path class="xcu0ugb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:playback-progress"} {...others} />);
}

export default Component;
