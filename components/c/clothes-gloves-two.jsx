import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cnu9c37td.css';
import '../../css/f/fcyrx-bii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cnu9c37td"/><path class="fcyrx-bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clothes-gloves-two"} {...others} />);
}

export default Component;
