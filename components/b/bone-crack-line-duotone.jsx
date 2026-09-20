import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr9yokbre.css';
import '../../css/l/l-d1m7_ft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sr9yokbre"/><path class="l-d1m7_ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-crack-line-duotone"} {...others} />);
}

export default Component;
