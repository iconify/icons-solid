import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lr8euubyt.css';
import '../../css/y/ykg6whbsy.css';
import '../../css/r/retufz7fu.css';

const viewBox = {"width":88,"height":88};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lr8euubyt"/><path class="ykg6whbsy"/><path class="retufz7fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:chart-pie"} {...others} />);
}

export default Component;
