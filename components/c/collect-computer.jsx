import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yjmut_51b.css';
import '../../css/n/ndpf7ubuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="yjmut_51b"/><path class="ndpf7ubuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:collect-computer"} {...others} />);
}

export default Component;
