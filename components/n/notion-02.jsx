import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3j5hcbwd.css';
import '../../css/m/m-54g_bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i3j5hcbwd"/><path class="m-54g_bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notion-02"} {...others} />);
}

export default Component;
