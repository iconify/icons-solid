import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qmmnpqd0d.css';
import '../../css/k/kej97abdp.css';
import '../../css/c/cmqybvbeu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qmmnpqd0d"/><path class="kej97abdp"/><path class="cmqybvbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sunshade"} {...others} />);
}

export default Component;
