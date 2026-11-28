import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yc-e7vb-v.css';
import '../../css/s/s6e7embjl.css';
import '../../css/g/g73ix5b6n.css';
import '../../css/o/ogy-c1b3h.css';
import '../../css/q/qg7rpk3uv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yc-e7vb-v"/><path class="s6e7embjl"/><path class="g73ix5b6n"/><path class="ogy-c1b3h"/><path class="qg7rpk3uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:city"} {...others} />);
}

export default Component;
