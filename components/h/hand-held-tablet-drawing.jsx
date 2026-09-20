import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x9lt49cvm.css';
import '../../css/f/ft5p2b-lu.css';
import '../../css/e/e_t27kmej.css';
import '../../css/t/t0rmonbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x9lt49cvm"/><path class="ft5p2b-lu"/><path class="e_t27kmej"/><path class="t0rmonbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hand-held-tablet-drawing"} {...others} />);
}

export default Component;
