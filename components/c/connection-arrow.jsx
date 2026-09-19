import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m1q6fc66q.css';
import '../../css/r/r945hu92f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="m1q6fc66q"/><path class="r945hu92f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:connection-arrow"} {...others} />);
}

export default Component;
