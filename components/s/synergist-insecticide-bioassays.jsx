import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a886v4b5j.css';
import '../../css/d/dn_477skz.css';
import '../../css/t/tzu0hsycl.css';
import '../../css/i/imvbfud-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="a886v4b5j"/><path clip-rule="evenodd" class="dn_477skz"/><path class="tzu0hsycl"/><path clip-rule="evenodd" class="imvbfud-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:synergist-insecticide-bioassays"} {...others} />);
}

export default Component;
