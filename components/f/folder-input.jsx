import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa38l7r8l.css';
import '../../css/h/hgrz1ubmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sa38l7r8l"/><path class="hgrz1ubmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-input"} {...others} />);
}

export default Component;
