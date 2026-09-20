import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r7bwjtgfs.css';
import '../../css/q/qzhswnbxk.css';
import '../../css/h/hkt1xxbem.css';
import '../../css/m/m7byn6b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r7bwjtgfs"/><path class="qzhswnbxk"/><path class="hkt1xxbem"/><path class="m7byn6b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-roller-bold"} {...others} />);
}

export default Component;
