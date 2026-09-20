import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nvp3kb18x.css';
import '../../css/l/l_83d_b0w.css';
import '../../css/x/xjacqllyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nvp3kb18x"/><path class="l_83d_b0w"/><path class="xjacqllyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:sambanova"} {...others} />);
}

export default Component;
