import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/j/jw6_s00qn.css';
import '../../css/u/uhr2_rb0p.css';
import '../../css/y/yk6248rpk.css';
import '../../css/d/d4ynnub1m.css';
import '../../css/a/avdj4hbjm.css';
import '../../css/g/gf3vfeb8q.css';
import '../../css/v/vd_zqdwxe.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="jw6_s00qn"/><path class="uhr2_rb0p"/><path class="yk6248rpk"/><path class="d4ynnub1m"/><path class="avdj4hbjm"/><path class="gf3vfeb8q"/><path class="vd_zqdwxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:editor"} {...others} />);
}

export default Component;
