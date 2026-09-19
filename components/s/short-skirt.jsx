import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/ck9lo8vwq.css';
import '../../css/w/w5ygmwb9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ck9lo8vwq"/><path class="w5ygmwb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:short-skirt"} {...others} />);
}

export default Component;
