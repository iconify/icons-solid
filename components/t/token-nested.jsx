import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ytaqn7dvp.css';
import '../../css/u/u35m6qohc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ytaqn7dvp"/><path class="u35m6qohc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-nested"} {...others} />);
}

export default Component;
