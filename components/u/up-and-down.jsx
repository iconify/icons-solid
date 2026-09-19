import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c30x9qo0x.css';
import '../../css/h/h-f1dmm4x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c30x9qo0x"/><path class="h-f1dmm4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:up-and-down"} {...others} />);
}

export default Component;
