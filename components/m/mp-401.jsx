import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuc6f8bph.css';
import '../../css/u/uxzkgjj2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vuc6f8bph"/><path class="uxzkgjj2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mp-401"} {...others} />);
}

export default Component;
