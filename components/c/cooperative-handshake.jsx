import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cglwi_50n.css';
import '../../css/y/y0cqvrbez.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cglwi_50n"/><path class="y0cqvrbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cooperative-handshake"} {...others} />);
}

export default Component;
