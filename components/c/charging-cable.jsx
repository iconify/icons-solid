import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zui1j9b_e.css';
import '../../css/x/x0tc4abcz.css';
import '../../css/w/w-jmn3bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="zui1j9b_e"/><path class="x0tc4abcz"/><path class="w-jmn3bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-cable"} {...others} />);
}

export default Component;
