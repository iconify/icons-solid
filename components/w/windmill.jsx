import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfujh5vjc.css';
import '../../css/t/tgr18saqk.css';
import '../../css/r/rrhwiyb4p.css';
import '../../css/s/sdfc81ytu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qfujh5vjc"/><path class="tgr18saqk"/><path class="rrhwiyb4p"/><path class="sdfc81ytu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:windmill"} {...others} />);
}

export default Component;
