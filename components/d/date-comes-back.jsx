import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ob3i2p4ac.css';
import '../../css/l/l_mxf2blx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ob3i2p4ac"/><path class="l_mxf2blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:date-comes-back"} {...others} />);
}

export default Component;
