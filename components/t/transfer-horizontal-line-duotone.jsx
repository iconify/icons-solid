import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdcn_s_df.css';
import '../../css/t/tm1rg8bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hdcn_s_df"/><path class="tm1rg8bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-horizontal-line-duotone"} {...others} />);
}

export default Component;
