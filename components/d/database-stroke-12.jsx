import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lwnp_lbfh.css';
import '../../css/b/bzgntubhg.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><ellipse class="lwnp_lbfh"/><path class="bzgntubhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:database-stroke-12"} {...others} />);
}

export default Component;
