import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rrcs6db5v.css';
import '../../css/w/wmvvik-ww.css';
import '../../css/w/wtv-5gbct.css';
import '../../css/b/b2f4ibbky.css';
import '../../css/v/vd7fh2bgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rrcs6db5v"/><path class="rrcs6db5v"/><path class="wmvvik-ww"/><path class="wtv-5gbct"/><path class="b2f4ibbky"/><path class="vd7fh2bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:refraction"} {...others} />);
}

export default Component;
