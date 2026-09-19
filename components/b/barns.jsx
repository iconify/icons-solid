import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2dj7tbgk.css';
import '../../css/l/lqpc584em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m2dj7tbgk"/><path class="lqpc584em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:barns"} {...others} />);
}

export default Component;
