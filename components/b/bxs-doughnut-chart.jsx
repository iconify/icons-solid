import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc6t_n4ay.css';
import '../../css/c/cqrap-bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zc6t_n4ay"/><path class="cqrap-bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-doughnut-chart"} {...others} />);
}

export default Component;
