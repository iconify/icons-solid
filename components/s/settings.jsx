import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq3gn9qof.css';
import '../../css/k/ksqk5bc1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pq3gn9qof"/><path class="ksqk5bc1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:settings"} {...others} />);
}

export default Component;
