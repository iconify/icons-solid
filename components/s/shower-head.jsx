import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xtg-chb6y.css';
import '../../css/u/utret9g9f.css';
import '../../css/g/gf1d4zp3f.css';
import '../../css/w/w439gnkso.css';
import '../../css/f/fmtboebos.css';
import '../../css/r/r4jqqbvbz.css';
import '../../css/a/a26e4jl4h.css';
import '../../css/c/cmq2zy85u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xtg-chb6y"/><path class="utret9g9f"/><path class="gf1d4zp3f wm-k"/><path class="w439gnkso wm-a"/><path class="fmtboebos wm-s"/><path class="r4jqqbvbz"/><path class="a26e4jl4h"/><path class="cmq2zy85u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shower-head"} {...others} />);
}

export default Component;
