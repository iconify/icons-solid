import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zsj7a9gzq.css';
import '../../css/u/uq7van9ri.css';
import '../../css/x/x_32o5bji.css';
import '../../css/y/y2dq4-b3s.css';
import '../../css/e/e-gsjcw2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zsj7a9gzq"/><path class="uq7van9ri wm-shine"/><path class="wm-k x_32o5bji"/><path class="wm-a y2dq4-b3s"/><path class="e-gsjcw2p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ship"} {...others} />);
}

export default Component;
