import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_dl1lbbt.css';
import '../../css/k/kl4vydy4t.css';
import '../../css/h/hvu8zoiwe.css';
import '../../css/x/x1_67lb9r.css';
import '../../css/c/csz57tbto.css';
import '../../css/p/pe3ue6qwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m_dl1lbbt"/><path class="kl4vydy4t"/><path class="hvu8zoiwe"/><path class="x1_67lb9r"/><path class="csz57tbto"/><path class="pe3ue6qwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heatmap-20-bold"} {...others} />);
}

export default Component;
