import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l29-8do0v.css';
import '../../css/t/t2b40pbhl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="l29-8do0v"/><path class="t2b40pbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nlg"} {...others} />);
}

export default Component;
