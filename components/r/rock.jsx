import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pa5opcbgo.css';
import '../../css/p/pvbrq0iat.css';
import '../../css/j/jlvcoldrg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pa5opcbgo"/><path class="pvbrq0iat"/><path class="jlvcoldrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rock"} {...others} />);
}

export default Component;
