import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/x/xsp8v5bie.css';
import '../../css/n/nfm8l-yni.css';
import '../../css/v/vp_u-eb9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="xsp8v5bie"/><path class="nfm8l-yni"/><path class="vp_u-eb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wrench-circle"} {...others} />);
}

export default Component;
