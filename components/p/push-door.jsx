import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mxp84ibzr.css';
import '../../css/v/v1c5nqghq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mxp84ibzr"/><path class="v1c5nqghq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:push-door"} {...others} />);
}

export default Component;
