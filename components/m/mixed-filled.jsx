import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s7ffxjtxx.css';
import '../../css/e/e2n2mtqgq.css';
import '../../css/n/n320cvblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s7ffxjtxx"/><path class="e2n2mtqgq"/><path class="n320cvblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mixed-filled"} {...others} />);
}

export default Component;
