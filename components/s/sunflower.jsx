import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/u4ksbsbta.css';
import '../../css/b/bg9sthewt.css';
import '../../css/o/oc2p_nmmq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="u4ksbsbta"/><path class="bg9sthewt"/><path class="oc2p_nmmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:sunflower"} {...others} />);
}

export default Component;
