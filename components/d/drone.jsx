import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ye8su7bgk.css';
import '../../css/u/uadpk7bcx.css';
import '../../css/c/c3dodzb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k ye8su7bgk"/><path class="uadpk7bcx wm-a"/><path class="c3dodzb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:drone"} {...others} />);
}

export default Component;
