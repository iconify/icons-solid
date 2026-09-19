import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uyzi7pbha.css';
import '../../css/a/aoxssybqm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uyzi7pbha"/><path class="aoxssybqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-booth"} {...others} />);
}

export default Component;
