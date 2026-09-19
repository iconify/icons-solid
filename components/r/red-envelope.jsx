import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/me_ua9s0y.css';
import '../../css/o/o1xiz1bxm.css';
import '../../css/l/l54so-d8u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="me_ua9s0y"/><path class="o1xiz1bxm"/><path class="l54so-d8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:red-envelope"} {...others} />);
}

export default Component;
