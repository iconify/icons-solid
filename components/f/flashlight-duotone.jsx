import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbohwsbsg.css';
import '../../css/b/bxy3pr4qd.css';
import '../../css/y/ysvf8_8zz.css';
import '../../css/q/qzsejdbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wbohwsbsg"/><path clip-rule="evenodd" class="bxy3pr4qd"/><path class="ysvf8_8zz"/><path class="qzsejdbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flashlight-duotone"} {...others} />);
}

export default Component;
