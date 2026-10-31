import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ltjm4ubuf.css';
import '../../css/w/we1o4actj.css';
import '../../css/p/pp76qbckp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ltjm4ubuf"/><path class="we1o4actj wm-shine"/><path class="pp76qbckp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:table"} {...others} />);
}

export default Component;
