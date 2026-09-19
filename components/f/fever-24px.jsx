import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucim6lbjm.css';
import '../../css/w/w98ih1blg.css';
import '../../css/d/dbz_4sb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ucim6lbjm"/><path class="w98ih1blg"/><path class="dbz_4sb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fever-24px"} {...others} />);
}

export default Component;
