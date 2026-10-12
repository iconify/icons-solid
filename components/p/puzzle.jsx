import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtsr8kbdj.css';
import '../../css/v/vy47kdmbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jtsr8kbdj"/><path class="vy47kdmbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:puzzle"} {...others} />);
}

export default Component;
