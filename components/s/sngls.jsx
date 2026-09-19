import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o69ov9i_j.css';
import '../../css/h/h91w4_b7d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="o69ov9i_j"/><path class="h91w4_b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sngls"} {...others} />);
}

export default Component;
