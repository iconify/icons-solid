import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g66itybsn.css';
import '../../css/x/xxtwnf1jn.css';
import '../../css/v/v-bri2r9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="g66itybsn"/><rect class="xxtwnf1jn"/><path class="v-bri2r9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shaving"} {...others} />);
}

export default Component;
