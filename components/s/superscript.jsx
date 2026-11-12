import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r14-1bc4p.css';
import '../../css/v/vex34rbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r14-1bc4p"/><path class="vex34rbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:superscript"} {...others} />);
}

export default Component;
