import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz_gpjb-q.css';
import '../../css/u/u92osielr.css';
import '../../css/m/m3ayyhbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cz_gpjb-q"/><path class="u92osielr"/><path class="m3ayyhbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-off"} {...others} />);
}

export default Component;
