import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by0wl7byu.css';
import '../../css/z/zm5kbdcot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="by0wl7byu"/><path class="zm5kbdcot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ruler-t"} {...others} />);
}

export default Component;
