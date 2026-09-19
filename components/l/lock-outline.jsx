import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oae8n8nad.css';
import '../../css/q/q78tzvb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lock-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="oae8n8nad"/><path class="q78tzvb-n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:lock-outline"} {...others} />);
}

export default Component;
