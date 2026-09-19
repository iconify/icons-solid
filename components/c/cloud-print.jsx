import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ggje0l_lo.css';
import '../../css/j/jud9t-_4k.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ggje0l_lo"/><path class="jud9t-_4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cloud-print"} {...others} />);
}

export default Component;
