import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhr8ssbfv.css';
import '../../css/k/kvyswhb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhr8ssbfv"/><path class="kvyswhb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cog-hand-give-1"} {...others} />);
}

export default Component;
