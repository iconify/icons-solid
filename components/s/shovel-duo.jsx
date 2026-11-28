import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-n4ob75a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rd6xl6bok.css';
import '../../css/s/sq0pxym8x.css';
import '../../css/v/vn1s0qnsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-n4ob75a secondary"/><g class="dt0cm9dhy primary"><path class="rd6xl6bok"/><path class="sq0pxym8x"/><path class="vn1s0qnsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shovel-duo"} {...others} />);
}

export default Component;
