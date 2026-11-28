import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3deczp9o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_280xbgm.css';
import '../../css/c/c48wx8bva.css';
import '../../css/x/xrswswblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3deczp9o secondary"/><g class="dt0cm9dhy primary"><path class="k_280xbgm"/><path class="c48wx8bva"/><path class="xrswswblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ad-duo"} {...others} />);
}

export default Component;
