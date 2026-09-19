import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/umfll9bys.css';
import '../../css/c/ceqznzypa.css';
import '../../css/h/h77qjobjk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="umfll9bys"/><circle class="ceqznzypa"/><path class="h77qjobjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:transform"} {...others} />);
}

export default Component;
