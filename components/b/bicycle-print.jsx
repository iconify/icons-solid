import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/juhm9r8eo.css';
import '../../css/y/y-zy3obry.css';
import '../../css/d/dtao50htd.css';
import '../../css/r/r90_e27xa.css';
import '../../css/q/q8hcysbhj.css';
import '../../css/t/tkwabqspy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="juhm9r8eo"/><path clip-rule="evenodd" class="y-zy3obry"/><path class="dtao50htd"/><path clip-rule="evenodd" class="r90_e27xa"/><path class="q8hcysbhj"/><path class="tkwabqspy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:bicycle-print"} {...others} />);
}

export default Component;
