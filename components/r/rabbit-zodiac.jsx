import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6zsdgblk.css';
import '../../css/x/xdgne4bek.css';
import '../../css/i/i0_3hn3oc.css';
import '../../css/w/w_lebqosk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k6zsdgblk"/><path class="xdgne4bek"/><path class="i0_3hn3oc"/><circle class="w_lebqosk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rabbit-zodiac"} {...others} />);
}

export default Component;
