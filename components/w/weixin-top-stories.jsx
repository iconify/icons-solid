import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/q/q2qq8rb1s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uns4e8bmd"/><path class="q2qq8rb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weixin-top-stories"} {...others} />);
}

export default Component;
