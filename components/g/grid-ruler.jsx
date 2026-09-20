import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x704tpbxt.css';
import '../../css/e/e8v11vout.css';
import '../../css/h/h-edmwpxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x704tpbxt"/><path class="e8v11vout"/><path class="h-edmwpxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:grid-ruler"} {...others} />);
}

export default Component;
