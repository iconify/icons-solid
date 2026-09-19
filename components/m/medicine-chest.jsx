import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh974hv9a.css';
import '../../css/x/xdhwcn32g.css';
import '../../css/f/ffmgiytrk.css';
import '../../css/k/ker0gib4l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="xh974hv9a"/><path class="xdhwcn32g"/><path class="ffmgiytrk"/><path class="ker0gib4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medicine-chest"} {...others} />);
}

export default Component;
