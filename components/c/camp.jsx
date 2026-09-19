import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xltgi6s1j.css';
import '../../css/f/f0rmndbzt.css';
import '../../css/o/of8nq_0fv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xltgi6s1j"/><path class="f0rmndbzt"/><path class="of8nq_0fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:camp"} {...others} />);
}

export default Component;
