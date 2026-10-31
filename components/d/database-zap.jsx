import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o1bpbkbgt.css';
import '../../css/y/ypbfh0z5c.css';
import '../../css/x/xw51ptbdg.css';
import '../../css/r/rb8dwrbro.css';
import '../../css/a/a183afr_i.css';
import '../../css/y/yahb0dtci.css';
import '../../css/k/k3-irtlcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o1bpbkbgt wm-shadow"/><path class="ypbfh0z5c"/><path class="xw51ptbdg"/><path class="rb8dwrbro"/><path class="a183afr_i"/><path class="wm-s yahb0dtci"/><path class="k3-irtlcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:database-zap"} {...others} />);
}

export default Component;
