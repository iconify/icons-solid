import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fwfr7jc3g.css';
import '../../css/j/jxwsi6yrn.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(1 1)" class="bi12bsetm"><path class="fwfr7jc3g"/><circle class="jxwsi6yrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:warning-triangle"} {...others} />);
}

export default Component;
