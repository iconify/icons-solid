import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lggz5nb8b.css';
import '../../css/j/j4xi_5bdy.css';
import '../../css/z/z7oodacwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lggz5nb8b"/><path class="j4xi_5bdy"/><path class="z7oodacwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ratio"} {...others} />);
}

export default Component;
