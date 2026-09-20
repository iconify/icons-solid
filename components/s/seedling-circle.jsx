import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iv72-jbje.css';
import '../../css/g/gkcec9d0c.css';
import '../../css/k/k_xjaedzr.css';
import '../../css/j/jrthnwb6l.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iv72-jbje"/><path class="gkcec9d0c"/><path class="k_xjaedzr"/><path class="jrthnwb6l"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:seedling-circle"} {...others} />);
}

export default Component;
