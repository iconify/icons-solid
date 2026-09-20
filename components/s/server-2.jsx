import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yr4w7qoxc.css';
import '../../css/k/kc8m1-0lc.css';
import '../../css/f/fl5zcabaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yr4w7qoxc"/><path class="kc8m1-0lc"/><path class="fl5zcabaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:server-2"} {...others} />);
}

export default Component;
