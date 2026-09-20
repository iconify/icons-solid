import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ydvazebbd.css';
import '../../css/q/qmfn_3bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ydvazebbd"/><path class="qmfn_3bzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:3d-glasses"} {...others} />);
}

export default Component;
