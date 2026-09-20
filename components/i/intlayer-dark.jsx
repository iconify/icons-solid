import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_3tac-mi.css';
import '../../css/i/iebp_9cqm.css';
import '../../css/y/ygp2y4lsg.css';

const viewBox = {"width":480,"height":448};
const content = `<defs><path id="SVGx22VTcBv" class="v_3tac-mi"/></defs><g class="iebp_9cqm"><use href="#SVGx22VTcBv"/><use href="#SVGx22VTcBv"/><path class="ygp2y4lsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:intlayer-dark"} {...others} />);
}

export default Component;
