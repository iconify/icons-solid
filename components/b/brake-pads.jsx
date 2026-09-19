import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y3m5p6eju.css';
import '../../css/u/uej0-0qgg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y3m5p6eju"/><path class="uej0-0qgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:brake-pads"} {...others} />);
}

export default Component;
