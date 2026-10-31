import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rnoiekb6f.css';
import '../../css/y/ysc_bv9xh.css';
import '../../css/p/pzuptg63y.css';
import '../../css/t/tm0pyacid.css';
import '../../css/n/n-07r-b5s.css';
import '../../css/m/m81j97b4l.css';
import '../../css/t/to_4-ab8t.css';
import '../../css/r/rz9jrmb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rnoiekb6f"/><path class="ysc_bv9xh"/><path class="pzuptg63y wm-shine"/><path class="tm0pyacid wm-k"/><path class="n-07r-b5s wm-a"/><path class="m81j97b4l"/><path class="to_4-ab8t"/><path class="rz9jrmb3z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flask-conical"} {...others} />);
}

export default Component;
