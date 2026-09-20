import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pr4f-9s_n.css';
import '../../css/r/ra5ekzk-k.css';
import '../../css/d/dkikyne8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pr4f-9s_n"/><path class="ra5ekzk-k"/><path class="dkikyne8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:new-api"} {...others} />);
}

export default Component;
