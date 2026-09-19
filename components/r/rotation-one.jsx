import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ka1_8zbxt.css';
import '../../css/i/izhrotbwm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ka1_8zbxt"/><path class="izhrotbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotation-one"} {...others} />);
}

export default Component;
