import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kcg668zpi.css';
import '../../css/m/mq_7ew1si.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kcg668zpi"/><path class="mq_7ew1si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nested-arrows"} {...others} />);
}

export default Component;
