import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld-vaf42i.css';
import '../../css/d/d70hihddh.css';
import '../../css/h/hr2s4cbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ld-vaf42i"/><path class="d70hihddh"/><path class="hr2s4cbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:stack"} {...others} />);
}

export default Component;
