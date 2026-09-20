import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjawkmjym.css';
import '../../css/n/nw9z_9bah.css';
import '../../css/d/d801rwncm.css';
import '../../css/w/w8wji3bbf.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cjawkmjym"/><path class="nw9z_9bah"/><path class="d801rwncm"/><path class="w8wji3bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:letter-open"} {...others} />);
}

export default Component;
