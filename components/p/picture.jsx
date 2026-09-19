import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zay1jacum.css';
import '../../css/i/ih879mn4c.css';
import '../../css/e/e7egbhwiy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zay1jacum"/><path class="ih879mn4c"/><path class="e7egbhwiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:picture"} {...others} />);
}

export default Component;
