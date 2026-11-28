import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy3l15beb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xf4w2jbwc.css';
import '../../css/a/a46hfsgsm.css';
import '../../css/a/aqma0ukti.css';
import '../../css/r/rca04vbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zy3l15beb"/><g class="dt0cm9dhy primary"><path class="xf4w2jbwc"/><path class="a46hfsgsm"/><path class="aqma0ukti"/><path class="rca04vbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:coins-stack-duo"} {...others} />);
}

export default Component;
