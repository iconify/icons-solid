import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5tm4s_ng.css';
import '../../css/g/gscxa243d.css';
import '../../css/e/ek6on5lbk.css';
import '../../css/x/xp4hzmy0t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x5tm4s_ng"/><path clip-rule="evenodd" class="gscxa243d"/><path clip-rule="evenodd" class="ek6on5lbk"/><path clip-rule="evenodd" class="xp4hzmy0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:horizontal-slider-square-flat"} {...others} />);
}

export default Component;
