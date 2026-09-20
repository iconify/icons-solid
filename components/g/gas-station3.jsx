import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e3bc_0b_p.css';
import '../../css/s/s_5om4bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e3bc_0b_p"/><path class="s_5om4bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gas-station3"} {...others} />);
}

export default Component;
