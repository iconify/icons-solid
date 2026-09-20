import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfx75ndgo.css';
import '../../css/s/s-wy90jas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vfx75ndgo"/><path class="s-wy90jas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-line-duotone"} {...others} />);
}

export default Component;
