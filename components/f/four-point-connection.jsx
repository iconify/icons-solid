import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ko35661_d.css';
import '../../css/r/ra788cbnf.css';
import '../../css/d/dn4j-pb5x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ko35661_d"/><path class="ra788cbnf"/><path class="dn4j-pb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:four-point-connection"} {...others} />);
}

export default Component;
