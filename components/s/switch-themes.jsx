import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/hwv66mdzf.css';
import '../../css/y/y--kyln4d.css';
import '../../css/x/xe96pzb2r.css';
import '../../css/v/v_bpadcpy.css';
import '../../css/r/ru9lu-39d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path clip-rule="evenodd" class="hwv66mdzf"/><path class="y--kyln4d"/><path class="xe96pzb2r"/><path class="v_bpadcpy"/><path class="ru9lu-39d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch-themes"} {...others} />);
}

export default Component;
