import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xif4yebky.css';
import '../../css/w/w65t7vpsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xif4yebky"/><circle class="w65t7vpsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:desert"} {...others} />);
}

export default Component;
