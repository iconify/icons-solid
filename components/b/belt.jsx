import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f3t_7nm-x.css';
import '../../css/r/ry5irt4_c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f3t_7nm-x"/><path class="ry5irt4_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:belt"} {...others} />);
}

export default Component;
