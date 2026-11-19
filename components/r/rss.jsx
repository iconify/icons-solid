import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ozs-xsk0k.css';
import '../../css/h/hmi1wdpxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ozs-xsk0k"/><path class="hmi1wdpxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rss"} {...others} />);
}

export default Component;
