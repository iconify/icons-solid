import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wgbk84bhp.css';
import '../../css/h/hj4gt6jmz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wgbk84bhp"/><path class="hj4gt6jmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:teapot"} {...others} />);
}

export default Component;
