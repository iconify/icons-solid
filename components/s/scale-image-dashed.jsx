import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlsd0hbtk.css';
import '../../css/e/ej9m1bu1q.css';
import '../../css/z/zo1xx2wxq.css';
import '../../css/h/hq3z83zvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jlsd0hbtk"/><path clip-rule="evenodd" class="ej9m1bu1q"/><path class="zo1xx2wxq"/><path class="hq3z83zvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scale-image-dashed"} {...others} />);
}

export default Component;
