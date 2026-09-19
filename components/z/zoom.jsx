import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yeud6mj5o.css';
import '../../css/m/mf1jdvbha.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="yeud6mj5o"/><path class="mf1jdvbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:zoom"} {...others} />);
}

export default Component;
