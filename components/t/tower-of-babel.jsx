import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cf12i2bxz.css';
import '../../css/r/ry9a-o47n.css';
import '../../css/n/nxner6fcl.css';
import '../../css/o/oiwhupulh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cf12i2bxz"/><path class="ry9a-o47n"/><path class="nxner6fcl"/><path class="oiwhupulh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tower-of-babel"} {...others} />);
}

export default Component;
