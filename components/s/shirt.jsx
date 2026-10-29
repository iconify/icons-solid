import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xjdkxr0_f.css';
import '../../css/u/uexu3ab2l.css';
import '../../css/u/unn-murzu.css';
import '../../css/d/d9q7phbbl.css';
import '../../css/w/w_fji5bsw.css';
import '../../css/v/vonb3q4ol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xjdkxr0_f"/><path class="uexu3ab2l"/><path class="unn-murzu"/><path class="d9q7phbbl"/><path class="w_fji5bsw wm-shine"/><path class="vonb3q4ol wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shirt"} {...others} />);
}

export default Component;
