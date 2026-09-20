import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eean7xbrt.css';
import '../../css/p/pkcdhcc0p.css';
import '../../css/q/qqwwgv2yz.css';
import '../../css/v/vh3u6lihn.css';
import '../../css/k/kcqe-38sn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eean7xbrt"/><path class="pkcdhcc0p"/><path class="qqwwgv2yz"/><path class="vh3u6lihn"/><path class="kcqe-38sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dashboard-gauge-2"} {...others} />);
}

export default Component;
