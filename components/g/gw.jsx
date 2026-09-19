import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mbv0z8b9w.css';
import '../../css/e/eilml7bjc.css';
import '../../css/r/ruftofbgy.css';
import '../../css/c/cc4a2vcxs.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mbv0z8b9w"/><path class="eilml7bjc"/><path class="ruftofbgy"/><path class="cc4a2vcxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:gw"} {...others} />);
}

export default Component;
