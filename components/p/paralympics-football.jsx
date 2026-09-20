import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qys-84bjk.css';
import '../../css/d/dypeyrb2s.css';
import '../../css/v/vp_uddchl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qys-84bjk"/><path class="dypeyrb2s"/><path class="vp_uddchl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:paralympics-football"} {...others} />);
}

export default Component;
