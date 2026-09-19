import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yprkt6b6c.css';
import '../../css/h/hhukqsb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="yprkt6b6c"/><path class="hhukqsb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:acute"} {...others} />);
}

export default Component;
