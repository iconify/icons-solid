import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mudtqcb_r.css';
import '../../css/y/y3kqfbcoj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="mudtqcb_r"/><path class="y3kqfbcoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mco"} {...others} />);
}

export default Component;
