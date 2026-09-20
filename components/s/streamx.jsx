import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np-sskbor.css';
import '../../css/j/jsr-a6v3g.css';
import '../../css/t/t-sci2y1e.css';
import '../../css/y/y0c2lnwwu.css';
import '../../css/m/mrqxd1bkj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="np-sskbor"/><path class="jsr-a6v3g"/><path class="t-sci2y1e"/><path class="y0c2lnwwu"/><path class="mrqxd1bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamx"} {...others} />);
}

export default Component;
