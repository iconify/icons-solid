import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gs1ol1b1d.css';
import '../../css/y/ywp4olbrr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gs1ol1b1d"/><path class="ywp4olbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:replay-five"} {...others} />);
}

export default Component;
