import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/clv_0rxpg.css';
import '../../css/a/ahb3szrou.css';
import '../../css/y/yg27cxuxs.css';
import '../../css/r/rxtygbq0g.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="clv_0rxpg"/><path class="ahb3szrou"/><path class="yg27cxuxs"/><path class="rxtygbq0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:cl"} {...others} />);
}

export default Component;
