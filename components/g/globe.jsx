import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/t/tujdn6tkq.css';
import '../../css/c/cfrkwie2s.css';
import '../../css/g/g161dj_5o.css';
import '../../css/x/xoaq8s_5h.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><circle class="tujdn6tkq"/><path class="cfrkwie2s"/><path class="g161dj_5o"/><path class="xoaq8s_5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:globe"} {...others} />);
}

export default Component;
