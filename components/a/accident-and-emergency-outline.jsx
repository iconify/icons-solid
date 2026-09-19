import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/p/pxi3puayf.css';
import '../../css/t/t8vw0vfjk.css';
import '../../css/m/mpg06dbtz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path clip-rule="evenodd" class="pxi3puayf"/><path clip-rule="evenodd" class="t8vw0vfjk"/><path class="mpg06dbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:accident-and-emergency-outline"} {...others} />);
}

export default Component;
