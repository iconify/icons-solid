import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p9wn_bc_q.css';
import '../../css/p/pptd7ccky.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p9wn_bc_q"/><path class="pptd7ccky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lollipop"} {...others} />);
}

export default Component;
