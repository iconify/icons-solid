import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4d9vmb1h.css';
import '../../css/c/ckvwzsyka.css';
import '../../css/i/i3a2c48-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p4d9vmb1h"/><path class="ckvwzsyka"/><path class="i3a2c48-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:time-clock-square"} {...others} />);
}

export default Component;
