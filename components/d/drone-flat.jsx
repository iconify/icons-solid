import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owb6zff4h.css';
import '../../css/j/j6gmb9btu.css';
import '../../css/w/w-laidn5j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="owb6zff4h"/><path clip-rule="evenodd" class="j6gmb9btu"/><path clip-rule="evenodd" class="w-laidn5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:drone-flat"} {...others} />);
}

export default Component;
