import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_8lrzb7q.css';
import '../../css/x/x-exdccqr.css';
import '../../css/s/so9dkqjrz.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_8lrzb7q"/><path class="x-exdccqr"/><path class="so9dkqjrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-up-right"} {...others} />);
}

export default Component;
