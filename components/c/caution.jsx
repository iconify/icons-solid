import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o799rcisc.css';
import '../../css/d/dufseh5oc.css';

const viewBox = {"width":35,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o799rcisc"/><path class="dufseh5oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:caution"} {...others} />);
}

export default Component;
