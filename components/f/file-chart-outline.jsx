import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdboc2nqx.css';
import '../../css/v/vq22hmbam.css';
import '../../css/r/rtla-_a_z.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gdboc2nqx"/><path class="vq22hmbam"/><path class="rtla-_a_z"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-chart-outline"} {...others} />);
}

export default Component;
