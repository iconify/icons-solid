import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/stm0ombpy.css';
import '../../css/s/sy9u-lkiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="stm0ombpy"/><path class="sy9u-lkiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-08"} {...others} />);
}

export default Component;
