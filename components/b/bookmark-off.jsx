import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/d5f9qib4i.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="d5f9qib4i"/><path class="oc0vi5bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:bookmark-off"} {...others} />);
}

export default Component;
