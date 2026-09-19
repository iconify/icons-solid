import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/maeqr4s2c.css';
import '../../css/b/bw3q8ht0l.css';
import '../../css/i/ijw3xziot.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="maeqr4s2c"/><path class="bw3q8ht0l"/><path class="ijw3xziot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:finger-print"} {...others} />);
}

export default Component;
