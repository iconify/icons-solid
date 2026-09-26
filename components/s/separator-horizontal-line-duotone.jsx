import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yy2_6bfra.css';
import '../../css/x/xdk9_oksp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yy2_6bfra"/><path class="xdk9_oksp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-horizontal-line-duotone"} {...others} />);
}

export default Component;
