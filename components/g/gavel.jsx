import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1af3nhfj.css';
import '../../css/x/xtaqtob1c.css';
import '../../css/d/dw2ho37lk.css';
import '../../css/h/hzvq6-bcg.css';
import '../../css/y/yehh7qbie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f1af3nhfj"/><path class="xtaqtob1c"/><path class="dw2ho37lk"/><rect transform="rotate(30 21 4)" class="hzvq6-bcg"/><rect transform="rotate(30 13 17.856)" class="yehh7qbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gavel"} {...others} />);
}

export default Component;
