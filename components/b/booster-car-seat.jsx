import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mbiljzlix.css';
import '../../css/o/o2nmueu5h.css';
import '../../css/p/pswfvabxt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mbiljzlix"/><path class="o2nmueu5h"/><path class="pswfvabxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:booster-car-seat"} {...others} />);
}

export default Component;
