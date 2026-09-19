import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tc7vr3bpx.css';
import '../../css/g/gwra3bc3h.css';
import '../../css/a/ax20kobkb.css';
import '../../css/x/xpk902bao.css';
import '../../css/s/sx93hzcdo.css';
import '../../css/d/daq_83f8q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="tc7vr3bpx"/><path class="gwra3bc3h"/><path class="ax20kobkb"/><path class="xpk902bao"/><path class="sx93hzcdo"/><path class="daq_83f8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pull-requests"} {...others} />);
}

export default Component;
