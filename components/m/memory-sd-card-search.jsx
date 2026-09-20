import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqvf5ab7w.css';
import '../../css/j/j5aipacmu.css';
import '../../css/w/wg0f-ab3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tqvf5ab7w"/><path class="j5aipacmu"/><path class="wg0f-ab3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:memory-sd-card-search"} {...others} />);
}

export default Component;
