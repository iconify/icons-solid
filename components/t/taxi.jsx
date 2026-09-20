import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_f1gcy3d.css';
import '../../css/t/tnjkjq1ws.css';
import '../../css/f/fvvslcb2i.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r_f1gcy3d"/><path class="tnjkjq1ws"/><path class="fvvslcb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:taxi"} {...others} />);
}

export default Component;
