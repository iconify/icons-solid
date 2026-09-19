import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w2fmp4bnm.css';
import '../../css/r/rvsrqeymq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="w2fmp4bnm"/><circle class="rvsrqeymq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:endpoint-flat"} {...others} />);
}

export default Component;
