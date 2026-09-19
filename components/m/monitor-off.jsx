import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/myj_5-bhn.css';
import '../../css/f/fmveuubpm.css';
import '../../css/c/c6oktlogx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="myj_5-bhn"/><path clip-rule="evenodd" class="fmveuubpm"/><path class="c6oktlogx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monitor-off"} {...others} />);
}

export default Component;
