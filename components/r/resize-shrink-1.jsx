import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o22zcjwus.css';
import '../../css/u/u4qzzebdn.css';
import '../../css/c/cjagq9luu.css';
import '../../css/c/c2kqpacmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o22zcjwus"/><path class="u4qzzebdn"/><path class="cjagq9luu"/><path class="c2kqpacmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:resize-shrink-1"} {...others} />);
}

export default Component;
