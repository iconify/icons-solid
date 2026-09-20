import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfkds5tvp.css';
import '../../css/g/ge3dxob1l.css';
import '../../css/i/iim04tfhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jfkds5tvp"/><path class="ge3dxob1l"/><path class="iim04tfhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-line-duotone"} {...others} />);
}

export default Component;
