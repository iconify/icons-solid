import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ra6t56b6o.css';
import '../../css/n/nc3xhsbmy.css';
import '../../css/p/pels_b8uv.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ra6t56b6o"/><path class="nc3xhsbmy"/><path class="pels_b8uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clock"} {...others} />);
}

export default Component;
