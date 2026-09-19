import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r53mumbjb.css';
import '../../css/h/hmg-5dugg.css';
import '../../css/q/qp833-mnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r53mumbjb"/><path class="hmg-5dugg"/><path class="qp833-mnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:resting"} {...others} />);
}

export default Component;
