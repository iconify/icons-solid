import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t_u4t-ivi.css';
import '../../css/m/mjirrrblx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t_u4t-ivi"/><path class="mjirrrblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:socks"} {...others} />);
}

export default Component;
