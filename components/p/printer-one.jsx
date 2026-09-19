import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hderv6bjc.css';
import '../../css/u/u2p1seb2u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hderv6bjc"/><path class="u2p1seb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:printer-one"} {...others} />);
}

export default Component;
