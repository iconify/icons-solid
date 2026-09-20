import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys52r7b9o.css';
import '../../css/q/qynfxmt6y.css';
import '../../css/f/f596bvbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ys52r7b9o"/><path class="qynfxmt6y"/><path class="f596bvbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-palette-sample-2"} {...others} />);
}

export default Component;
