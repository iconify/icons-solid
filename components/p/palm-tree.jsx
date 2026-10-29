import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mm2szcbmu.css';
import '../../css/x/x8-a5_dkh.css';
import '../../css/q/qcfnobbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mm2szcbmu"/><path class="x8-a5_dkh"/><path class="qcfnobbty wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palm-tree"} {...others} />);
}

export default Component;
