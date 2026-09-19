import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uwy-gqb8h.css';
import '../../css/j/jw704zd0t.css';
import '../../css/j/j8iq9-ffs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="uwy-gqb8h"/><path class="jw704zd0t"/><path class="j8iq9-ffs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:steering"} {...others} />);
}

export default Component;
