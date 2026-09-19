import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lwom3q5we.css';
import '../../css/m/moikf8p9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lwom3q5we"/><path class="moikf8p9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:album-01"} {...others} />);
}

export default Component;
