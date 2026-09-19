import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttzw2gbcj.css';
import '../../css/d/d7hkwttlg.css';
import '../../css/r/ru-d6_b-z.css';
import '../../css/m/mu2p0mb8a.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttzw2gbcj"/><path clip-rule="evenodd" class="d7hkwttlg"/><path class="ru-d6_b-z"/><path clip-rule="evenodd" class="mu2p0mb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:smartphone"} {...others} />);
}

export default Component;
