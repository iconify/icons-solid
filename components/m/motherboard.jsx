import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dtcuvh7uw.css';
import '../../css/c/cd3dg_wtk.css';
import '../../css/v/vv0u9-ufy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="dtcuvh7uw"/><path class="cd3dg_wtk"/><rect class="vv0u9-ufy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:motherboard"} {...others} />);
}

export default Component;
