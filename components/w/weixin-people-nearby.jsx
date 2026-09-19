import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/y/y3sl4tari.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="y3sl4tari"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weixin-people-nearby"} {...others} />);
}

export default Component;
