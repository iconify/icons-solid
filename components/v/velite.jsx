import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfpzo8bzp.css';
import '../../css/n/n8cg1nb1q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="hfpzo8bzp"/><path class="n8cg1nb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:velite"} {...others} />);
}

export default Component;
