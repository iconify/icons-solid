import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1y6tob6i.css';
import '../../css/i/ik-qt204h.css';
import '../../css/x/xtsc8cbvl.css';
import '../../css/w/wuoav4m-a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d1y6tob6i"/><path class="ik-qt204h"/><path class="xtsc8cbvl"/><path class="wuoav4m-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:show-layer"} {...others} />);
}

export default Component;
