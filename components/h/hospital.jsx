import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jhi4u9hbk.css';
import '../../css/q/qr-0ynbwb.css';
import '../../css/j/j4nm59cjn.css';
import '../../css/z/zz7smbbbt.css';
import '../../css/v/vir2iib6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jhi4u9hbk"/><path class="qr-0ynbwb wm-shine"/><path class="j4nm59cjn wm-k"/><path class="wm-a zz7smbbbt"/><path class="vir2iib6z wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hospital"} {...others} />);
}

export default Component;
