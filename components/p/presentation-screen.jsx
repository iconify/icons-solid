import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrn1x2sgp.css';
import '../../css/y/yys4-bbwv.css';
import '../../css/v/vrwwxccjf.css';
import '../../css/f/f3j45ub3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrn1x2sgp"/><path class="yys4-bbwv"/><path class="vrwwxccjf"/><path class="f3j45ub3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:presentation-screen"} {...others} />);
}

export default Component;
