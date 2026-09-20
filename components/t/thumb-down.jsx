import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/ben3jv5qz.css';
import '../../css/o/onb-68b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ben3jv5qz"/><path class="onb-68b4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:thumb-down"} {...others} />);
}

export default Component;
