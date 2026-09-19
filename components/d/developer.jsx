import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3t75y80o.css';
import '../../css/b/bp4g3ft0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b3t75y80o"/><path class="bp4g3ft0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:developer"} {...others} />);
}

export default Component;
