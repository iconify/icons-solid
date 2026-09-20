import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld_h50eyi.css';
import '../../css/s/s_ppo_bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ld_h50eyi"/><path class="s_ppo_bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:settings-slider-desktop-horizontal"} {...others} />);
}

export default Component;
