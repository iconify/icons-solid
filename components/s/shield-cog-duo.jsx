import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0xrppfrs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/t/tv4sijtxc.css';
import '../../css/c/cj57dzbma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x0xrppfrs"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="tv4sijtxc"/><path class="cj57dzbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-cog-duo"} {...others} />);
}

export default Component;
