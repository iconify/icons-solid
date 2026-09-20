import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qxj4zkbbb.css';
import '../../css/f/fbyg_kb_c.css';
import '../../css/y/ydvqm7-lm.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qxj4zkbbb"/><path class="fbyg_kb_c"/><path class="ydvqm7-lm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:car-taxi-1-flat"} {...others} />);
}

export default Component;
