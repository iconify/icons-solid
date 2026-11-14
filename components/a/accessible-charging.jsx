import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4lcrg_oy.css';
import '../../css/q/q22fozbrr.css';
import '../../css/r/rgm89rb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="q4lcrg_oy"/><path class="q22fozbrr"/><path class="rgm89rb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:accessible-charging"} {...others} />);
}

export default Component;
