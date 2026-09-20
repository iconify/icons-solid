import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1p6qfb0z.css';
import '../../css/b/b8mfld0zy.css';
import '../../css/g/gx7601vyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x1p6qfb0z"/><path class="b8mfld0zy"/><path class="gx7601vyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smartphone-app-widget-remove"} {...others} />);
}

export default Component;
