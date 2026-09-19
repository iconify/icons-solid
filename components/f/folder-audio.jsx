import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q58hkcbgc.css';
import '../../css/j/j6317qk2y.css';
import '../../css/k/kypu-j12r.css';
import '../../css/l/lx0eilk4u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="q58hkcbgc"/><g class="j6317qk2y"><path class="kypu-j12r"/><path class="lx0eilk4u"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-audio"} {...others} />);
}

export default Component;
