import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/x/x82v_8qul.css';
import '../../css/k/knxr7ab-k.css';
import '../../css/d/dxm8dzbyd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="x82v_8qul"/><circle class="knxr7ab-k"/><circle class="dxm8dzbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:root"} {...others} />);
}

export default Component;
