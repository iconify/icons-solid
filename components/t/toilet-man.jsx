import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxas-zbth.css';
import '../../css/e/ensyt8pbp.css';
import '../../css/c/ctkw7r7_i.css';
import '../../css/g/g3ir3vx2h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jxas-zbth"/><path class="ensyt8pbp"/><path class="ctkw7r7_i"/><path class="g3ir3vx2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:toilet-man"} {...others} />);
}

export default Component;
