import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk1oa_q5q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nk1oa_q5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:layout-sidebar-left-off"} {...others} />);
}

export default Component;
