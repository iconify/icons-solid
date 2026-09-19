import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_2xqrblo.css';
import '../../css/k/kfsvx8bdz.css';
import '../../css/x/xmi3_wb8e.css';
import '../../css/p/pjlhsbb3d.css';
import '../../css/o/o1pjzw66g.css';
import '../../css/d/dex8nju6g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n_2xqrblo"/><path class="kfsvx8bdz"/><path class="xmi3_wb8e"/><path class="pjlhsbb3d"/><path class="o1pjzw66g"/><path class="dex8nju6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dynatrace"} {...others} />);
}

export default Component;
