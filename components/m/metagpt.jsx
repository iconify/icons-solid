import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezfdsvasf.css';
import '../../css/j/j2_27xfof.css';
import '../../css/m/mdlt0ybhe.css';
import '../../css/t/tkhoozdbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ezfdsvasf"/><path class="j2_27xfof"/><path class="mdlt0ybhe"/><path class="tkhoozdbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:metagpt"} {...others} />);
}

export default Component;
