import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mx_ovcmoo.css';
import '../../css/s/s10p-20lu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mx_ovcmoo"/><path class="s10p-20lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:level-adjustment"} {...others} />);
}

export default Component;
