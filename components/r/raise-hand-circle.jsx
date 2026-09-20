import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wp_t_lhzr.css';
import '../../css/z/zg7blmbnp.css';
import '../../css/i/iazqm-bml.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wp_t_lhzr"/><path class="zg7blmbnp"/><path class="iazqm-bml"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:raise-hand-circle"} {...others} />);
}

export default Component;
