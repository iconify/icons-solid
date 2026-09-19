import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/alp79ubpb.css';
import '../../css/y/youyxubtt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="alp79ubpb"/><path class="youyxubtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ltc"} {...others} />);
}

export default Component;
