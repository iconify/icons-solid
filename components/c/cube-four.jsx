import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r437_k3kf.css';
import '../../css/h/h0ept0bti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r437_k3kf"/><path class="h0ept0bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cube-four"} {...others} />);
}

export default Component;
