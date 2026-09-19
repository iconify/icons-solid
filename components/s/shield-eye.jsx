import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vthw3ebcn.css';
import '../../css/r/r0it_tiwo.css';
import '../../css/v/vt6fgp66q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vthw3ebcn"/><path class="r0it_tiwo"/><path class="vt6fgp66q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shield-eye"} {...others} />);
}

export default Component;
