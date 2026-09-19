import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/l/lumab6baq.css';
import '../../css/t/tng64wbcx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="lumab6baq"/><path class="tng64wbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lisp"} {...others} />);
}

export default Component;
