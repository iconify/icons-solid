import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lnqi0grko.css';
import '../../css/s/sd9f6hv3q.css';
import '../../css/q/qhs-1kczd.css';
import '../../css/z/z4-koub6k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lnqi0grko"/><path class="sd9f6hv3q"/><path class="qhs-1kczd"/><ellipse class="z4-koub6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data"} {...others} />);
}

export default Component;
