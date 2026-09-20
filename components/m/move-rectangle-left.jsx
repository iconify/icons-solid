import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mxpiv0byi.css';
import '../../css/h/hdc10yrqn.css';
import '../../css/v/vwk_je8sw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mxpiv0byi"/><path class="hdc10yrqn"/><path class="vwk_je8sw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:move-rectangle-left"} {...others} />);
}

export default Component;
