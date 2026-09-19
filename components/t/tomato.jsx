import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ueikzvfjm.css';
import '../../css/a/as4b8ybnt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ueikzvfjm"/><path class="as4b8ybnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tomato"} {...others} />);
}

export default Component;
