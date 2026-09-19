import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y67gvgx0g.css';
import '../../css/p/prdfs8bga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y67gvgx0g"/><path class="prdfs8bga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:manual-gear"} {...others} />);
}

export default Component;
