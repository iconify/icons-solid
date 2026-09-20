import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eizdr2f_d.css';
import '../../css/q/qzcstj6ya.css';
import '../../css/v/voplo8xtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="eizdr2f_d"/><path class="qzcstj6ya"/><path class="voplo8xtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:flip-reflect-up"} {...others} />);
}

export default Component;
