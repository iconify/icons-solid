import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s8s8d-xex.css';
import '../../css/n/ntr69qfvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="s8s8d-xex"/><path class="ntr69qfvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hold"} {...others} />);
}

export default Component;
