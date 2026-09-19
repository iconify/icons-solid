import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t-2uyek1g.css';
import '../../css/c/ct_y8nbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="t-2uyek1g"/><path class="ct_y8nbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fire-02"} {...others} />);
}

export default Component;
