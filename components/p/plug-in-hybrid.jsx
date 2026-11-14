import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5o37lmcf.css';
import '../../css/f/fl825d_-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v5o37lmcf"/><path class="fl825d_-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-in-hybrid"} {...others} />);
}

export default Component;
