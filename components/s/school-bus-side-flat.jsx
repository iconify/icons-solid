import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jffi-4zru.css';
import '../../css/a/aw8-pbcnm.css';
import '../../css/e/eqfrj73ru.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jffi-4zru"/><path clip-rule="evenodd" class="aw8-pbcnm"/><path class="eqfrj73ru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:school-bus-side-flat"} {...others} />);
}

export default Component;
