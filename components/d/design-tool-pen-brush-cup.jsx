import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef9d5u_yc.css';
import '../../css/f/f-0v3hb_f.css';
import '../../css/p/phxh88geo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ef9d5u_yc"/><path class="f-0v3hb_f"/><path class="phxh88geo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:design-tool-pen-brush-cup"} {...others} />);
}

export default Component;
