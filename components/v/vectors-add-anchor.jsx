import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bajvfrb1s.css';
import '../../css/c/cg99nnbvu.css';
import '../../css/f/fdv8unbfl.css';
import '../../css/c/c10h2475o.css';
import '../../css/f/fiv5ojbbj.css';
import '../../css/c/cahdxac0p.css';
import '../../css/d/d_d28xkqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bajvfrb1s"/><path class="cg99nnbvu"/><path class="fdv8unbfl"/><path class="c10h2475o"/><path class="fiv5ojbbj"/><path class="cahdxac0p"/><path class="d_d28xkqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:vectors-add-anchor"} {...others} />);
}

export default Component;
