import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dt_kzxb6g.css';
import '../../css/b/bpny-o4rm.css';
import '../../css/r/rjyplsjao.css';
import '../../css/y/yzgz32bhq.css';
import '../../css/p/p8hfojb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dt_kzxb6g"/><path class="bpny-o4rm"/><path class="rjyplsjao"/><path class="yzgz32bhq"/><path class="p8hfojb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-cross-line-duotone"} {...others} />);
}

export default Component;
