import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctl_ykb8l.css';
import '../../css/b/bru927b7a.css';
import '../../css/t/tibham96p.css';
import '../../css/n/nvyrcxbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ctl_ykb8l"><path class="bru927b7a"/><path class="tibham96p"/><path class="nvyrcxbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:friendli"} {...others} />);
}

export default Component;
