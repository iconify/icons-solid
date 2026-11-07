import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aioa80p_s.css';
import '../../css/e/e66c5hbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aioa80p_s"/><path class="e66c5hbmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-line-duotone"} {...others} />);
}

export default Component;
