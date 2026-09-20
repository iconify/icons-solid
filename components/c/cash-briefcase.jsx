import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/apnsnraet.css';
import '../../css/i/i0l8nlq8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="apnsnraet"/><path class="i0l8nlq8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-briefcase"} {...others} />);
}

export default Component;
