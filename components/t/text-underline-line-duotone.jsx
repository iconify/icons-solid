import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/poyc1firz.css';
import '../../css/r/rn9p1ts4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="poyc1firz"/><path class="rn9p1ts4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-line-duotone"} {...others} />);
}

export default Component;
