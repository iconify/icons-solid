import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/prq48dbgc.css';
import '../../css/q/qg63ysl4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="prq48dbgc"/><path class="qg63ysl4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:volume-medium"} {...others} />);
}

export default Component;
