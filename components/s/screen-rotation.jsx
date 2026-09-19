import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2e3a6bxc.css';
import '../../css/t/tmsi3nbrx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f2e3a6bxc"/><path class="tmsi3nbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:screen-rotation"} {...others} />);
}

export default Component;
