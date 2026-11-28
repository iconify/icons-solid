import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1xbpzeux.css';
import '../../css/k/kbxpyqdun.css';
import '../../css/g/gs05fwbhe.css';
import '../../css/z/ztl4i1bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u1xbpzeux"/><path class="kbxpyqdun"/><path class="gs05fwbhe"/><path class="ztl4i1bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-king"} {...others} />);
}

export default Component;
