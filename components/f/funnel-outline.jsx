import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7n0u1bfa.css';
import '../../css/g/gz5qvg7hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="funnel-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="j7n0u1bfa"/><path class="gz5qvg7hl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:funnel-outline"} {...others} />);
}

export default Component;
