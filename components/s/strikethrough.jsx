import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rljxo28vb.css';
import '../../css/i/imhi0yb-x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rljxo28vb"/><path class="imhi0yb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:strikethrough"} {...others} />);
}

export default Component;
