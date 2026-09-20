import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_igzvbfb.css';
import '../../css/m/mofjnfb7v.css';
import '../../css/d/d9if94bjp.css';
import '../../css/x/x36ij3b7l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p_igzvbfb"/><path class="mofjnfb7v"/><path class="d9if94bjp"/><path class="x36ij3b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:paintbrush-1"} {...others} />);
}

export default Component;
