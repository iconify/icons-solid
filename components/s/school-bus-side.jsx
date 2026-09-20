import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbc_1fbpw.css';
import '../../css/f/f5v-3obno.css';
import '../../css/t/t_rc37vcj.css';
import '../../css/m/mzkugvbxs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vbc_1fbpw"/><path class="f5v-3obno"/><path class="t_rc37vcj"/><path class="mzkugvbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:school-bus-side"} {...others} />);
}

export default Component;
