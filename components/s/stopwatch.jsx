import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k4vg3_baj.css';
import '../../css/f/f9oebdtuz.css';
import '../../css/z/zslk7c9lx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k4vg3_baj"/><path class="f9oebdtuz"/><path class="zslk7c9lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:stopwatch"} {...others} />);
}

export default Component;
