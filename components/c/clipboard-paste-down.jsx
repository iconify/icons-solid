import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s5yva2b0n.css';
import '../../css/a/a2azp6b3y.css';
import '../../css/w/w52wv_7uo.css';
import '../../css/s/sxr7q-bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s5yva2b0n"/><path class="a2azp6b3y"/><path class="w52wv_7uo"/><path class="sxr7q-bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:clipboard-paste-down"} {...others} />);
}

export default Component;
